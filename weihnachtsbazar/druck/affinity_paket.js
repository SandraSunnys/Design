// Baut das Affinity-Paket aus auslagen.html:
//   affinity/Auslagen_Affinity.pdf   – Vektor-PDF mit den statischen Schriften aus affinity/Schriften
//   affinity/Masse_und_Stile.pdf     – Maßblatt: Positionen in mm, Schriftstile in pt, Farben
//   affinity/Vorschau/Seite-N.png    – Bild jeder Seite
//   affinity/Texte.txt               – alle Texte zum Kopieren
// Aufruf:  node affinity_paket.js   (nach python3 bauen.py)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DRUCK = __dirname;
const AFF = path.join(DRUCK, '..', 'affinity');
const SCHRIFTEN = path.join(AFF, 'Schriften');
const mm = px => Math.round(px * 25.4 / 96 * 10) / 10;   // 96 px = 1 inch
const pt = px => Math.round(px * 0.75 * 10) / 10;

const FACES = [
  ['Bricolage Grotesque', 400, 'normal', 'BricolageGrotesque-Regular.ttf'],
  ['Bricolage Grotesque', 700, 'normal', 'BricolageGrotesque-Bold.ttf'],
  ['Bricolage Grotesque', 800, 'normal', 'BricolageGrotesque-ExtraBold.ttf'],
  ['DM Sans', 400, 'normal', 'DMSans-Regular.ttf'],
  ['DM Sans', 400, 'italic', 'DMSans-Italic.ttf'],
  ['DM Sans', 600, 'normal', 'DMSans-SemiBold.ttf'],
  ['DM Sans', 700, 'normal', 'DMSans-Bold.ttf'],
];

(async () => {
  let html = fs.readFileSync(path.join(DRUCK, 'auslagen.html'), 'utf8');
  const faces = FACES.map(([f, w, s, file]) =>
    `@font-face{font-family:"${f}";font-weight:${w};font-style:${s};src:url("file://${path.join(SCHRIFTEN, file)}") format("truetype");}`).join('\n');
  html = html.replace(/<link rel="preconnect"[^>]*>\n?/, '')
             .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*>/, `<style>\n${faces}\n</style>`)
             .replace(/src="fotos\//g, `src="file://${path.join(DRUCK, 'fotos')}/`);
  const tmp = path.join(DRUCK, '.affinity-tmp.html');
  fs.writeFileSync(tmp, html);

  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1123, height: 794 } });
  await p.emulateMedia({ media: 'print' });
  await p.goto('file://' + tmp, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const fontsOk = await p.evaluate(() => [...document.fonts].filter(f => f.status === 'loaded').length);

  // ---- Maße und Texte auslesen ----
  const data = await p.evaluate(() => {
    const r = (el, base) => { const a = el.getBoundingClientRect(); return { x: a.left - base.left, y: a.top - base.top, w: a.width, h: a.height }; };
    return [...document.querySelectorAll('.blatt')].map((bl, i) => {
      const base = bl.getBoundingClientRect();
      const q = s => bl.querySelector(s);
      const kopf = {};
      for (const [k, s] of [['Dachzeile', '.dach'], ['Titel', '.titel'], ['Infozeile', '.info'], ['Aufkleber', '.sticker'], ['Fußzeile', '.fuss']]) if (q(s)) kopf[k] = r(q(s), base);
      const karten = [...bl.querySelectorAll('.karte')].map(k => ({
        name: k.querySelector('.name').textContent.trim(),
        farbe: getComputedStyle(k).getPropertyValue('--c').trim(),
        karte: r(k, base),
        foto: k.querySelector('.foto, .tafel') ? r(k.querySelector('.foto, .tafel'), base) : null,
        text: k.innerText.replace(/\n+/g, '\n').trim(),
      }));
      return { seite: i + 1, titel: q('.titel').textContent.trim(), kopf, karten,
               kopfText: [q('.dach'), q('.titel'), q('.info'), q('.sticker')].filter(Boolean).map(e => e.innerText.replace(/\n/g, ' ').trim()),
               fussText: q('.fuss').innerText.replace(/\n/g, ' | ').trim() };
    });
  });
  const stile = await p.evaluate(() => {
    const out = [];
    const add = (label, sel) => {
      const el = document.querySelector(sel); if (!el) return;
      const c = getComputedStyle(el);
      out.push({ label, family: c.fontFamily.split(',')[0].replace(/"/g, ''), weight: c.fontWeight, style: c.fontStyle,
        size: parseFloat(c.fontSize), lh: c.lineHeight === 'normal' ? null : parseFloat(c.lineHeight),
        ls: c.letterSpacing === 'normal' ? 0 : parseFloat(c.letterSpacing), upper: c.textTransform === 'uppercase', color: c.color });
    };
    add('Dachzeile', '.dach'); add('Seitentitel', '.titel'); add('Infozeile', '.info');
    add('Aufkleber groß', '.sticker b'); add('Aufkleber klein', '.sticker span');
    add('Sortenname (3×2)', '.raster--3 .name'); add('Zutaten (3×2)', '.raster--3 .zutaten');
    add('Sortenname (4er-Reihe)', '.raster--4 .name'); add('Zutaten (4er-Reihe)', '.raster--4 .zutaten');
    add('Produktname (Einzelblatt)', '.karte--gross .name'); add('Zutaten (Einzelblatt)', '.karte--gross .zutaten');
    add('Kräutername', '.karte--kraut .name'); add('Botanischer Name', '.latein'); add('Gewicht (Pille)', '.gewicht');
    add('Verwendung', '.karte--kraut .zutaten'); add('Pille Alkohol', '.pille'); add('Fußzeile', '.fuss');
    add('Gruß', '.fuss .gruss'); add('Bildnachweis', '.fuss .credit');
    return out;
  });

  // ---- Vektor-PDF und Vorschaubilder ----
  await p.pdf({ path: path.join(AFF, 'Auslagen_Affinity.pdf'), printBackground: true, preferCSSPageSize: true });
  fs.mkdirSync(path.join(AFF, 'Vorschau'), { recursive: true });
  const ss = await p.$$('.blatt');
  await p.emulateMedia({ media: 'screen' });
  for (let i = 0; i < ss.length; i++) await ss[i].screenshot({ path: path.join(AFF, 'Vorschau', `Seite-${i + 1}.png`) });

  // ---- Texte.txt ----
  let txt = 'TEXTE FÜR DIE AUSLAGEN – zum Kopieren in Affinity\n\n';
  for (const s of data) {
    txt += `==================== SEITE ${s.seite}: ${s.titel} ====================\n`;
    txt += s.kopfText.join('\n') + '\n\n';
    for (const k of s.karten) txt += `--- ${k.name} ---\n${k.text}\n\n`;
    txt += `Fuß: ${s.fussText}\n\n`;
  }
  fs.writeFileSync(path.join(AFF, 'Texte.txt'), txt);

  // ---- Maßblatt ----
  const box = o => o ? `${mm(o.x)} / ${mm(o.y)}` : '–';
  const size = o => o ? `${mm(o.w)} × ${mm(o.h)}` : '–';
  const css = fs.readFileSync(path.join(DRUCK, 'auslagen.css'), 'utf8');
  const v = n => (css.match(new RegExp(`--${n}:\\s*(#[0-9a-fA-F]{6})`)) || [])[1];
  const farben = [['Weiß (Grund)', v('weiss')], ['Tinte (Text)', v('tinte')], ['Tinte 2 (Info, Fuß)', v('tinte-2')], ['Rot (Akzent Pralinen)', v('rot')], ['Tanne (Akzent Kräuter)', v('tanne')]];
  for (const s of data) for (const k of s.karten) farben.push([k.name, k.farbe]);
  const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)).join(' / ');

  let seitenHtml = '';
  for (const s of data) {
    seitenHtml += `<h2>Seite ${s.seite}: ${s.titel}</h2><table><tr><th>Element</th><th>Position x / y (mm)</th><th>Größe b × h (mm)</th><th>Hinweis</th></tr>`;
    for (const [k, o] of Object.entries(s.kopf)) seitenHtml += `<tr><td>${k}</td><td>${box(o)}</td><td>${size(o)}</td><td>${k === 'Aufkleber' ? 'Kreis, um −9° gedreht' : ''}</td></tr>`;
    for (const k of s.karten) {
      seitenHtml += `<tr><td><b>Karte ${k.name}</b></td><td>${box(k.karte)}</td><td>${size(k.karte)}</td><td>Fläche ${k.farbe}, Eckenradius 7,4 mm</td></tr>`;
      if (k.foto) seitenHtml += `<tr><td class="ein">Foto</td><td>${box(k.foto)}</td><td>${size(k.foto)}</td><td>${s.seite === 3 ? 'freigestellt, direkt auf der Fläche' : 'weißer Kreis, Foto darin'}</td></tr>`;
    }
    seitenHtml += '</table>';
  }
  const stilHtml = stile.map(st => `<tr><td>${st.label}</td><td>${st.family}</td><td>${{ 400: 'Regular', 600: 'SemiBold', 700: 'Bold', 800: 'ExtraBold' }[st.weight] || st.weight}${st.style === 'italic' ? ' Italic' : ''}</td><td>${pt(st.size)} pt</td><td>${st.lh ? pt(st.lh) + ' pt' : '–'}</td><td>${st.ls ? Math.round(st.ls / st.size * 1000) : 0}</td><td>${st.upper ? 'Versalien' : ''}</td></tr>`).join('');
  const farbHtml = farben.map(([n, h]) => `<tr><td><span class="sw" style="background:${h}"></span>${n}</td><td>${h.toUpperCase()}</td><td>${rgb(h)}</td></tr>`).join('');

  const blatt = `<!doctype html><html lang="de"><head><meta charset="utf-8"><style>
    ${FACES.map(([f, w, s, file]) => `@font-face{font-family:"${f}";font-weight:${w};font-style:${s};src:url("file://${path.join(SCHRIFTEN, file)}");}`).join('')}
    @page{size:A4;margin:16mm 14mm}
    body{font:9.5pt/1.4 "DM Sans",sans-serif;color:#1d1b1a}
    h1{font:800 24pt/1 "Bricolage Grotesque";letter-spacing:-.03em;margin:0 0 4mm}
    h2{font:800 13pt/1.2 "Bricolage Grotesque";margin:7mm 0 2mm;break-after:avoid}
    p,li{margin:0 0 1.5mm} ul{padding-left:5mm;margin:0 0 3mm}
    table{border-collapse:collapse;width:100%;margin-bottom:2mm;break-inside:auto}
    th,td{text-align:left;padding:1.2mm 2mm;border-bottom:.3pt solid #ddd;vertical-align:top}
    th{font-weight:700;background:#f4f1ee} tr{break-inside:avoid} td.ein{padding-left:6mm;color:#5c5652}
    .sw{display:inline-block;width:4mm;height:4mm;border-radius:1mm;margin-right:2mm;vertical-align:-0.8mm;border:.3pt solid #ccc}
    .rot{color:#c8102e;font-weight:700}
  </style></head><body>
  <h1>Maße &amp; Stile für Affinity</h1>
  <p><b>Dokument:</b> A4 quer, 297 × 210 mm, 4 Seiten (Zeichenflächen), Ränder links/rechts 11,6 mm, oben 9 mm, unten 5,8 mm. Farbraum RGB (für Heim- oder Copyshop-Druck). Alle Positionen gemessen von der linken oberen Seitenecke.</p>
  <h2>So geht's in Affinity</h2>
  <ul>
    <li><b>Schriften installieren</b> (Ordner <i>Schriften</i>, Doppelklick → Installieren), dann Affinity neu starten.</li>
    <li><b>Auslagen_Affinity.pdf</b> in Affinity öffnen (Datei → Öffnen). Im Import-Dialog die Option für bearbeitbaren Text einschalten („Bearbeitbaren Text … vorziehen“). Alle Flächen, Kreise und Texte sind einzeln bearbeitbar, die Fotos eingebettet.</li>
    <li>Wer lieber neu aufbaut: die Maße unten, die Fotos aus <i>Fotos</i>, die Texte aus <i>Texte.txt</i> und die Farbpalette <i>Farben.ase</i> (Palette → Importieren) nutzen.</li>
    <li>Karten: Rechteck mit <b>Eckenradius 7,4 mm</b>; Foto-Teller: weißer Kreis, Pralinenfoto darin auf ca. 88 % skaliert, Kräuterfoto kreisrund maskiert.</li>
    <li>Pillen („mit/ohne Alkohol“, Gewicht): Rechteck mit voll abgerundeten Ecken, Innenabstand ca. 1 × 2,6 mm.</li>
    <li>Funkeln (vierzackiger Stern): als Vektor im PDF enthalten, einfach kopieren.</li>
    <li>Drucken: Skalierung 100 %, randlos bzw. „tatsächliche Größe“.</li>
  </ul>
  <h2>Schriftstile</h2>
  <table><tr><th>Stil</th><th>Schrift</th><th>Schnitt</th><th>Größe</th><th>Zeilenabstand</th><th>Laufweite (‰)</th><th></th></tr>${stilHtml}</table>
  <p>Text auf allen Farbkarten in <b>Tinte #1D1B1A</b>. Etiketten „Zutaten:“ und „Verwendung:“ im Schnitt Bold.</p>
  <h2>Farben</h2>
  <table><tr><th>Farbe</th><th>HEX</th><th>RGB</th></tr>${farbHtml}</table>
  ${seitenHtml}
  </body></html>`;
  const mt = path.join(DRUCK, '.masse-tmp.html');
  fs.writeFileSync(mt, blatt);
  const p2 = await b.newPage();
  await p2.goto('file://' + mt, { waitUntil: 'networkidle' });
  await p2.evaluate(() => document.fonts.ready);
  await p2.pdf({ path: path.join(AFF, 'Masse_und_Stile.pdf'), preferCSSPageSize: true, printBackground: true });
  await b.close();
  fs.unlinkSync(tmp); fs.unlinkSync(mt);
  console.log('Schriften geladen:', fontsOk, '| Seiten:', data.length, '| Karten:', data.reduce((a, s) => a + s.karten.length, 0));
  fs.writeFileSync(path.join(DRUCK, '..', 'affinity', '.farben.json'), JSON.stringify(farben));
})();
