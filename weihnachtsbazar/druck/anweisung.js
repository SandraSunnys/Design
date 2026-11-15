// Erzeugt affinity/Anweisung_fuer_Claude.md: eine vollständige Bau-Anweisung für ein Claude
// mit Affinity-Zugang, mit allen Maßen (mm), Schriften (pt), Farben und Texten.
// Aufruf:  node anweisung.js   (nach python3 bauen.py)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const DRUCK = __dirname;
const AFF = path.join(DRUCK, '..', 'affinity');
const SCHRIFTEN = path.join(AFF, 'Schriften');
const mm = px => (Math.round(px * 25.4 / 96 * 10) / 10).toFixed(1).replace('.', ',');
const pt = px => String(Math.round(px * 0.75 * 10) / 10).replace('.', ',');
const FACES = [
  ['Bricolage Grotesque', 800, 'normal', 'BricolageGrotesque-ExtraBold.ttf'],
  ['DM Sans', 400, 'normal', 'DMSans-Regular.ttf'], ['DM Sans', 400, 'italic', 'DMSans-Italic.ttf'],
  ['DM Sans', 600, 'normal', 'DMSans-SemiBold.ttf'], ['DM Sans', 700, 'normal', 'DMSans-Bold.ttf'],
];

(async () => {
  let html = fs.readFileSync(path.join(DRUCK, 'auslagen.html'), 'utf8');
  const faces = FACES.map(([f, w, s, file]) => `@font-face{font-family:"${f}";font-weight:${w};font-style:${s};src:url("file://${path.join(SCHRIFTEN, file)}");}`).join('\n');
  html = html.replace(/<link rel="preconnect"[^>]*>\n?/, '')
             .replace(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis[^>]*>/, `<style>${faces}</style>`)
             .replace(/src="fotos\//g, `src="file://${path.join(DRUCK, 'fotos')}/`);
  const tmp = path.join(DRUCK, '.anweisung-tmp.html');
  fs.writeFileSync(tmp, html);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1123, height: 794 } });
  await p.goto('file://' + tmp, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);

  const seiten = await p.evaluate(() => {
    const rgbHex = c => { const m = c.match(/\d+(\.\d+)?/g); return m ? '#' + m.slice(0, 3).map(n => (+n).toString(16).padStart(2, '0')).join('').toUpperCase() : c; };
    const font = el => { const c = getComputedStyle(el); return { fam: c.fontFamily.split(',')[0].replace(/"/g, ''), w: +c.fontWeight, it: c.fontStyle === 'italic', size: parseFloat(c.fontSize), lh: parseFloat(c.lineHeight) || null, ls: c.letterSpacing === 'normal' ? 0 : parseFloat(c.letterSpacing), up: c.textTransform === 'uppercase', color: rgbHex(c.color), align: c.textAlign }; };
    return [...document.querySelectorAll('.blatt')].map(bl => {
      const B = bl.getBoundingClientRect();
      const box = el => { const a = el.getBoundingClientRect(); return { x: a.left - B.left, y: a.top - B.top, w: a.width, h: a.height }; };
      const txt = (el, label) => el && ({ label, box: box(el), font: font(el), text: el.innerText.trim() });
      const els = [];
      const q = s => bl.querySelector(s);
      els.push(txt(q('.dach'), 'Dachzeile'));
      // Titel ohne Funkeln messen
      const t = q('.titel'); const range = document.createRange(); range.selectNodeContents(t.firstChild);
      const tr = range.getBoundingClientRect();
      els.push({ label: 'Seitentitel', box: { x: tr.left - B.left, y: t.getBoundingClientRect().top - B.top, w: tr.width, h: t.getBoundingClientRect().height }, font: font(t), text: t.firstChild.textContent.trim() });
      const fk = [...t.querySelectorAll('.funkeln')].map(s => ({ box: box(s), color: rgbHex(getComputedStyle(s.querySelector('path')).fill) }));
      if (q('.info')) els.push(txt(q('.info'), 'Infozeile'));
      let sticker = null;
      if (q('.sticker')) { const s = q('.sticker'); const a = s.getBoundingClientRect(); const d = s.offsetWidth;
        sticker = { cx: a.left + a.width / 2 - B.left, cy: a.top + a.height / 2 - B.top, d, color: rgbHex(getComputedStyle(s).backgroundColor),
          gross: { text: s.querySelector('b').innerText, font: font(s.querySelector('b')) }, klein: { text: s.querySelector('span').innerText, font: font(s.querySelector('span')) } }; }
      const karten = [...bl.querySelectorAll('.karte')].map(k => {
        const kc = getComputedStyle(k);
        const o = { name: k.querySelector('.name').innerText.trim(), box: box(k), farbe: kc.getPropertyValue('--c').trim().toUpperCase(), radius: parseFloat(kc.borderTopLeftRadius), teile: [] };
        const f = k.querySelector('.foto');
        if (f) { const img = f.querySelector('img'); o.teile.push({ art: 'teller', box: box(f), bild: img.getAttribute('src').split('/').pop(), maske: f.classList.contains('foto--bild') }); }
        const tf = k.querySelector('.tafel'); if (tf) o.teile.push({ art: 'bild', box: box(tf), bild: tf.getAttribute('src').split('/').pop() });
        for (const pl of k.querySelectorAll('.pille, .gewicht')) { const c = getComputedStyle(pl); o.teile.push({ art: 'pille', box: box(pl), fl: rgbHex(c.backgroundColor), font: font(pl), text: pl.innerText.trim() }); }
        for (const [s, l] of [['.name', 'Name'], ['.latein', 'Botanischer Name'], ['.zutaten', k.classList.contains('karte--kraut') ? 'Verwendung' : 'Zutaten']]) {
          const el = k.querySelector(s); if (!el) continue;
          let text = el.innerText.trim(); const g = el.querySelector('.gewicht'); if (g) text = text.replace(g.innerText, '').trim();
          const bx = box(el); if (g) { const gb = g.getBoundingClientRect(); bx.y = gb.bottom - B.top + 1; bx.h -= gb.height; }
          o.teile.push({ art: 'text', label: l, box: bx, font: font(el), text, fett: el.querySelector('b') ? el.querySelector('b').innerText.trim() : null });
        }
        return o;
      });
      const fu = q('.fuss'); const fuss = [...fu.children].map(c => ({ box: box(c), font: font(c), text: c.innerText.trim(), html: c.innerHTML }));
      return { titel: t.firstChild.textContent.trim(), els: els.filter(Boolean), fk, sticker, karten, fuss };
    });
  });
  await b.close();
  fs.unlinkSync(tmp);

  // ---------- Markdown ----------
  const css = fs.readFileSync(path.join(DRUCK, 'auslagen.css'), 'utf8');
  const v = n => (css.match(new RegExp(`--${n}:\\s*(#[0-9a-fA-F]{6})`)) || [])[1].toUpperCase();
  const schnitt = f => `${f.fam} ${({ 400: 'Regular', 600: 'SemiBold', 700: 'Bold', 800: 'ExtraBold' })[f.w]}${f.it ? ' Italic' : ''}`.replace('Regular Italic', 'Italic');
  const fstr = f => `${schnitt(f)}, ${pt(f.size)} pt${f.lh ? `, Zeilenabstand ${pt(f.lh)} pt` : ''}${f.ls ? `, Laufweite ${Math.round(f.ls / f.size * 1000)} ‰` : ''}${f.up ? ', Versalien' : ''}, Farbe ${f.color}`;
  const pos = bx => `x ${mm(bx.x)} mm, y ${mm(bx.y)} mm`;
  const gr = bx => `${mm(bx.w)} × ${mm(bx.h)} mm`;

  let md = `# Anweisung: Weihnachtsbazar-Auslagen in Affinity setzen

Bitte setze mit deinem Affinity-Zugang ein Dokument mit **4 Seiten A4 quer** für unseren Pralinen- und Kräuterstand. Alle Inhalte, Maße, Farben und Schriften stehen unten. Bitte **nichts am Text ändern oder ergänzen**, keine Allergene hinzufügen und keine weiteren Deko-Elemente erfinden.

## 0. Vorbereitung

1. Frag mich zuerst nach dem Pfad des entpackten Ordners **„Weihnachtsbazar_Affinity“** (aus der ZIP-Datei). Darin liegen:
   - \`Fotos/\`: alle Produktfotos (Pralinen als freigestellte PNG, Kräuter als JPG),
   - \`Vorschau/Seite-1.png\` bis \`Seite-4.png\`: so soll das Ergebnis aussehen,
   - \`Auslagen_Affinity.pdf\`: dieselben Seiten als Vektor-PDF,
   - \`Farben.ase\`: Farbpalette, \`Schriften/\`: die Schriftdateien.
2. Prüfe, ob die Schriften **Bricolage Grotesque ExtraBold** und **DM Sans** (Regular, Italic, SemiBold, Bold) installiert sind. Falls nicht: bitte mich, die .ttf-Dateien aus \`Schriften/\` zu installieren und Affinity neu zu starten.
3. Schau dir die vier Vorschaubilder an, bevor du anfängst.
4. **Weg wählen:** Kann dein Affinity-Zugang Formen, Text und Bilder anlegen, baue das Dokument neu nach den Angaben unten (sauberste Ebenen). Kann er nur Dateien öffnen, öffne \`Auslagen_Affinity.pdf\` mit bearbeitbarem Text und setze dann nur die Dachzeilen, die „MIT/OHNE ALKOHOL“-Pillen und die runden Aufkleber neu, denn die kommen beim PDF-Import oft als Einzelbuchstaben an.

## 1. Dokument

- 4 Seiten bzw. Zeichenflächen, je **297 × 210 mm** (A4 quer), Farbraum RGB, 300 dpi.
- Maßeinheit mm; alle Positionen unten sind die **linke obere Ecke**, gemessen von der linken oberen Seitenecke.
- Hintergrund jeder Seite: Weiß.
- Ebenen: pro Seite eine Gruppe „Kopf“, eine Gruppe je Karte (benannt nach dem Produkt), eine Gruppe „Fuß“.

## 2. Farben (als Palette „Weihnachtsbazar“ anlegen oder Farben.ase importieren)

| Name | HEX | Verwendung |
|---|---|---|
| Weiß | ${v('weiss')} | Grund, Foto-Teller, Pille „ohne Alkohol“, Gewichts-Pille |
| Tinte | ${v('tinte')} | **aller Text auf den Karten**, Pille „mit Alkohol“ |
| Tinte 2 | ${v('tinte-2')} | Infozeile und Fußzeile (nur auf Weiß) |
| Rot | ${v('rot')} | Dachzeile, Funkeln und Aufkleber bei Pralinen, „Frohe Weihnachten!“ |
| Tanne | ${v('tanne')} | Dachzeile und Funkeln bei Kräutern |
`;
  const seen = new Set();
  for (const s of seiten) for (const k of s.karten) if (!seen.has(k.name)) { seen.add(k.name); md += `| ${k.name} | ${k.farbe} | Kartenfläche |\n`; }

  md += `
## 3. Gestaltungsregeln

- **Karten:** Rechteck ohne Kontur, Fläche in der Sortenfarbe, **Eckenradius 7,4 mm** an allen Ecken.
- **Foto-Teller:** weißer Kreis ohne Kontur. Pralinenfoto (PNG, transparent) mittig darin, auf **88 %** des Kreisdurchmessers eingepasst (Seitenverhältnis behalten). Kräuterfoto füllt den Kreis ganz aus und wird **rund maskiert** (in den Kreis einfügen / Maske).
- **Pillen** („MIT ALKOHOL“, „OHNE ALKOHOL“, Gewicht): Rechteck mit voll abgerundeten Ecken (Radius = halbe Höhe), Text darin mittig.
- **Funkeln:** vierzackiger Stern mit nach innen gewölbten Seiten. Als Kurve: Start oben Mitte, je Viertel eine Kurve durch die Mitte (SVG-Pfad im 24-Einheiten-Raster: \`M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z\`). Alternativ aus \`Auslagen_Affinity.pdf\` kopieren.
- **Aufkleber:** Kreis in Rot, zwei Textzeilen weiß und zentriert, Kreis samt Text **um 9° gegen den Uhrzeigersinn gedreht** (−9°).
- Keine Schatten, keine Verläufe, keine Konturen.
- Etiketten **„Zutaten:“** und **„Verwendung:“** in DM Sans Bold, der Rest der Zeile Regular.
- Textrahmen: Positionsangaben sind die Oberkante des Textrahmens; Breite wie angegeben, Höhe nach Bedarf. Kleine Abweichungen (±0,5 mm) sind in Ordnung, Hauptsache es sieht aus wie die Vorschau.

`;
  seiten.forEach((s, i) => {
    md += `## ${4 + i}. Seite ${i + 1}: ${s.titel}\n\nVorschau: \`Vorschau/Seite-${i + 1}.png\`\n\n### Kopf\n\n`;
    for (const e of s.els) md += `- **${e.label}:** „${e.text}“, Textrahmen ${pos(e.box)}, Breite ${mm(e.box.w + 2)} mm. ${fstr(e.font)}.\n`;
    s.fk.forEach((f, j) => md += `- **Funkeln ${j + 1}:** ${pos(f.box)}, ${gr(f.box)}, Farbe ${f.color}.\n`);
    if (s.sticker) {
      const st = s.sticker;
      md += `- **Aufkleber:** Kreis Ø ${mm(st.d)} mm, Mittelpunkt bei x ${mm(st.cx)} mm, y ${mm(st.cy)} mm, Farbe ${st.color}, um −9° gedreht. Text zentriert, zwei Zeilen: „${st.gross.text}“ (${fstr(st.gross.font)}) und darunter „${st.klein.text}“ (${fstr(st.klein.font)}).\n`;
    }
    md += `\n### Karten\n\n`;
    for (const k of s.karten) {
      md += `**${k.name}:** Karte ${pos(k.box)}, ${gr(k.box)}, Fläche ${k.farbe}, Eckenradius ${mm(k.radius)} mm.\n`;
      for (const t of k.teile) {
        if (t.art === 'teller') md += `- Foto-Teller: weißer Kreis ${pos(t.box)}, Ø ${mm(t.box.w)} mm, Foto \`Fotos/${t.bild}\` ${t.maske ? 'rund maskiert, füllend' : 'mittig, 88 % eingepasst'}.\n`;
        if (t.art === 'bild') md += `- Foto \`Fotos/${t.bild}\` (freigestellt, direkt auf der Fläche): ${pos(t.box)}, eingepasst in ${gr(t.box)}.\n`;
        if (t.art === 'pille') md += `- Pille „${t.text}“: ${pos(t.box)}, ${gr(t.box)}, Fläche ${t.fl}, Text ${fstr(t.font)}.\n`;
        if (t.art === 'text') md += `- ${t.label}: Textrahmen ${pos(t.box)}, Breite ${mm(t.box.w + 2)} mm. ${fstr(t.font)}${t.fett ? ` („${t.fett}“ in DM Sans Bold)` : ''}. Text: „${t.text}“\n`;
      }
      md += '\n';
    }
    md += `### Fuß\n\n`;
    for (const f of s.fuss) {
      const label = f.html.includes('gruss') || f.text.startsWith('Frohe') ? 'Gruß (mit kleinem Funkeln 3,7 × 3,7 mm in Rot davor, Abstand 1,6 mm)' : f.text.startsWith('Fotos') ? 'Bildnachweis' : 'Adresse („Angelika Ruppel“ in DM Sans Bold, Farbe #1D1B1A, Rest Regular)';
      md += `- **${label}:** „${f.text}“, ${pos(f.box)}, Breite ${mm(f.box.w + 2)} mm. ${fstr(f.font)}.\n`;
    }
    md += '\n';
  });
  md += `## 8. Zum Schluss

1. Jede Seite als PNG exportieren und mit \`Vorschau/Seite-N.png\` vergleichen. Abweichungen korrigieren (vor allem: Text läuft aus einer Karte heraus, Foto nicht mittig im Teller, falsche Schrift).
2. Das Dokument im Ordner „Weihnachtsbazar_Affinity“ speichern als **„Weihnachtsbazar_Auslagen“** (Affinity-Format).
3. Zusätzlich ein **druckfertiges PDF** exportieren: alle 4 Seiten, A4 quer, ohne Beschnitt, Schriften eingebettet, Dateiname „Weihnachtsbazar_Auslagen_Druck.pdf“.
4. Kurz berichten, was fertig ist und was ich noch prüfen sollte.
`;
  fs.writeFileSync(path.join(AFF, 'Anweisung_fuer_Claude.md'), md);
  console.log('geschrieben:', md.length, 'Zeichen,', md.split('\n').length, 'Zeilen');
})();
