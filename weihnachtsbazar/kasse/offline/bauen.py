#!/usr/bin/env python3
"""Baut die Offline-Kasse aus ../kasse.html.

Die Offline-Version rechnet und sieht genauso aus wie die Online-Kasse,
speichert aber alles im Browser des Geräts (localStorage) und braucht kein
Internet: Schriften und Symbol stecken in der Datei, ein Service Worker hält
die App auch ohne Netz bereit, wenn sie einmal von einer https-Adresse
geöffnet wurde.

Aufruf:  python3 bauen.py
Ergebnis: index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png
"""
import base64
import json
import math
from pathlib import Path

from PIL import Image, ImageDraw

HIER = Path(__file__).resolve().parent
QUELLE = HIER.parent / "kasse.html"
SCHRIFTEN = HIER.parent.parent / "affinity" / "Schriften"
ROT = (200, 16, 46)

# Sortiment und Preise kommen aus ../sortiment.json (dieselben Daten wie online).
STANDARD = json.loads((HIER.parent / "sortiment.json").read_text(encoding="utf-8"))
# PayPal-QR-Code zum Geld-Empfangen (aus der PayPal-App), wird beim ersten Start hinterlegt.
_QR = HIER.parent / "paypal-qr.jpg"
PAYPAL = {"qr": "data:image/jpeg;base64," + base64.b64encode(_QR.read_bytes()).decode() if _QR.exists() else "", "name": ""}


def b64(pfad):
    return base64.b64encode(Path(pfad).read_bytes()).decode()


def symbol(groesse):
    """Rotes Quadrat mit weißem Funkelstern (Maskable-tauglich: Stern im inneren 60 %)."""
    s = 4  # überabtasten für glatte Kanten
    g = groesse * s
    img = Image.new("RGB", (g, g), ROT)
    d = ImageDraw.Draw(img)

    def bez(p0, p1, p2, p3, n=40):
        for k in range(n + 1):
            t = k / n
            yield tuple((1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t * t * c + t ** 3 * e
                        for a, b, c, e in zip(p0, p1, p2, p3))

    # Pfad aus dem Logo: M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0
    segs = [((12, 0), (13, 8), (16, 11), (24, 12)), ((24, 12), (16, 13), (13, 16), (12, 24)),
            ((12, 24), (11, 16), (8, 13), (0, 12)), ((0, 12), (8, 11), (11, 8), (12, 0))]
    skala = g * 0.56 / 24
    off = (g - 24 * skala) / 2
    pts = []
    for seg in segs:
        pts += [(off + x * skala, off + y * skala) for x, y in bez(*seg)]
    d.polygon(pts, fill=(255, 255, 255))
    return img.resize((groesse, groesse), Image.LANCZOS)


def ersetze(text, alt, neu):
    assert text.count(alt) == 1, "Stelle nicht eindeutig gefunden: " + alt[:70]
    return text.replace(alt, neu)


def main():
    html = QUELLE.read_text(encoding="utf-8")

    for g in (192, 512):
        symbol(g).save(HIER / f"icon-{g}.png", optimize=True)
    symbol(180).save(HIER / "apple-touch.tmp.png", optimize=True)
    apple = b64(HIER / "apple-touch.tmp.png")
    (HIER / "apple-touch.tmp.png").unlink()

    schriften = "\n".join(
        '@font-face { font-family: "%s"; font-weight: %s; font-style: normal; font-display: swap; src: url(data:font/ttf;base64,%s) format("truetype"); }'
        % (fam, w, b64(SCHRIFTEN / datei))
        for fam, w, datei in [
            ("Bricolage Grotesque", "600 900", "BricolageGrotesque-ExtraBold.ttf"),
            ("DM Sans", "400", "DMSans-Regular.ttf"),
            ("DM Sans", "500 600", "DMSans-SemiBold.ttf"),
            ("DM Sans", "700", "DMSans-Bold.ttf"),
        ]
    )

    # ---------- Kopf: eigenes Dokument statt Artifact-Gerüst ----------
    kopf_alt = html[: html.index("<style>") + len("<style>")]
    kopf_neu = (
        '<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n'
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
        "<title>Basar-Kasse</title>\n"
        '<meta name="theme-color" content="#ffffff">\n'
        '<meta name="mobile-web-app-capable" content="yes">\n'
        '<meta name="apple-mobile-web-app-capable" content="yes">\n'
        '<meta name="apple-mobile-web-app-title" content="Kasse">\n'
        '<meta name="apple-mobile-web-app-status-bar-style" content="default">\n'
        '<link rel="manifest" href="manifest.webmanifest">\n'
        f'<link rel="apple-touch-icon" href="data:image/png;base64,{apple}">\n'
        f'<link rel="icon" type="image/png" href="data:image/png;base64,{apple}">\n'
        "<style>\n" + schriften + "\n"
        ":root { padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }\n"
        "body { margin: 0; -webkit-text-size-adjust: 100%; } img { max-width: 100%; }\n"
    )
    html = kopf_neu + html[len(kopf_alt):]
    html = ersetze(html, "</style>\n\n<header", "</style>\n</head>\n<body>\n\n<header")
    assert html.rstrip().endswith("</script>")
    html = html.rstrip() + "\n</body>\n</html>\n"

    # ---------- Speicher ----------
    html = ersetze(html,
        'set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }',
        'set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }')
    html = ersetze(html,
        '''    S.verkaeufe = S.verkaeufe.concat([v]); LS.set("kasse-verkaeufe", S.verkaeufe); renderVerkaeufe();
    return Promise.resolve(v.id);''',
        '''    var neu = S.verkaeufe.concat([v]);
    if (!LS.set("kasse-verkaeufe", neu)) return Promise.reject({ code: "quota_exceeded" });
    S.verkaeufe = neu; renderVerkaeufe();
    return Promise.resolve(v.id);''')

    # ---------- Status & Hinweise ----------
    html = ersetze(html, 'lokal: ["lokal", "nur auf diesem Gerät"]', 'lokal: ["live", "offline bereit"]')
    html = ersetze(html,
        '''    if (S.modus === "lokal") h.push("<b>Nur auf diesem Gerät.</b> Hier können Verkäufe nicht gemeinsam gespeichert werden. Öffnen Sie die Kasse angemeldet in claude.ai, damit alle Helfer dieselben Zahlen sehen.");''',
        '''    if (S.speicherFehler) h.push("<b>Achtung, hier wird nichts gespeichert.</b> Dieser Browser erlaubt kein Speichern, zum Beispiel in einem privaten Fenster. Öffnen Sie die Kasse in einem normalen Fenster.");''')

    # ---------- Export: Datei direkt speichern ----------
    html = ersetze(html,
        '''    var dl = window.claude && window.claude.use ? window.claude.use("downloads") : Promise.resolve(null);
    Promise.resolve(dl).then(function (d) {
      if (!d) return zeigeText();
      return d.save({ filename: name, data: csv }).then(function (r) { if (r && r.status === "saved") toast("CSV gespeichert"); }, function (e) { if (!e || e.code !== "declined") zeigeText(); });
    }).catch(zeigeText);''',
        '''    if (speichereDatei(name, csv, "text/csv;charset=utf-8")) toast("CSV-Datei erstellt");
    zeigeText();''')
    html = ersetze(html, "  function exportieren() {", '''  function speichereDatei(name, inhalt, typ) {
    try {
      var url = URL.createObjectURL(new Blob([inhalt], { type: typ }));
      var a = document.createElement("a"); a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 5000);
      return true;
    } catch (e) { return false; }
  }
  function exportieren() {''')

    # ---------- Sicherung in „Preise & Rabatte“ ----------
    html = ersetze(html,
        '''    h += '<div class="speicher-leiste" id="speicher-leiste"''',
        '''    h += '<section><div><h2>Daten sichern</h2><p class="erkl">Preise, Verkäufe, Vorbestellungen, Lager und Notizen liegen nur auf diesem Gerät. Speichern Sie abends eine Sicherung, zum Beispiel per Mail an sich selbst. Mit „Sicherung einlesen“ holen Sie alles zurück oder auf ein anderes Gerät.</p></div>' +
      '<div class="zeile" style="flex-wrap:wrap"><button class="knopf" type="button" id="sicherung">Sicherung speichern</button>' +
      '<label class="knopf" style="position:relative;display:inline-flex;align-items:center;cursor:pointer">Sicherung einlesen<input type="file" id="einlesen" accept=".json,application/json" style="position:absolute;inset:0;opacity:0;width:100%;cursor:pointer"></label>' +
      '<button class="knopf" type="button" id="alles-loeschen">Alle Verkäufe löschen</button></div><div id="loesch-frage"></div></section>';
    h += '<div class="speicher-leiste" id="speicher-leiste"''')

    # ---------- Start: ohne claude.ai ----------
    start_alt = html[html.index("  function start() {"): html.index("  start();\n})();")]
    start_neu = '''  var STANDARD = ''' + json.dumps(STANDARD, ensure_ascii=False) + ''';
  var PAYPAL_STANDARD = ''' + json.dumps(PAYPAL) + ''';
  function start() {
    S.modus = "lokal"; S.geladen = true;
    try { localStorage.setItem("kasse-test", "1"); localStorage.removeItem("kasse-test"); } catch (e) { S.speicherFehler = true; }
    S.einst = LS.get("kasse-einst", null) || JSON.parse(JSON.stringify(STANDARD));
    S.verkaeufe = LS.get("kasse-verkaeufe", []);
    S.notizen = LS.get("kasse-notizen", []);
    S.ausverkauft = LS.get("kasse-ausverkauft", {});
    S.lager = LS.get("kasse-lager", { bestand: {}, knapp: 3 });
    S.paypal = LS.get("kasse-paypal", null) || PAYPAL_STANDARD;
    S.vorbestellungen = LS.get("kasse-vorbestellungen", []);
    renderAlles();
    if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) navigator.serviceWorker.register("sw.js").catch(function () {});
  }

  /* ---------- Sicherung ---------- */
  document.addEventListener("click", function (ev) {
    var t = ev.target.closest("button"); if (!t) return;
    if (t.id === "sicherung") {
      var daten = JSON.stringify({ app: "basar-kasse", erstellt: new Date().toISOString(), einst: S.einst, verkaeufe: S.verkaeufe, notizen: S.notizen, ausverkauft: S.ausverkauft, lager: S.lager, paypal: S.paypal, vorbestellungen: S.vorbestellungen }, null, 1);
      toast(speichereDatei("basar-kasse-sicherung-" + heute() + ".json", daten, "application/json") ? "Sicherung erstellt" : "Sicherung konnte nicht gespeichert werden");
    }
    if (t.id === "alles-loeschen") {
      $("loesch-frage").innerHTML = '<div class="bestaetigen" style="justify-content:flex-start;align-items:center;flex-wrap:wrap"><span>Wirklich alle ' + S.verkaeufe.length + ' Verkäufe löschen? Das lässt sich nicht rückgängig machen.</span><button type="button" id="loeschen-nein">Nein</button><button class="ja" type="button" id="loeschen-ja">Ja, löschen</button></div>';
    }
    if (t.id === "loeschen-nein") $("loesch-frage").innerHTML = "";
    if (t.id === "loeschen-ja") { S.verkaeufe = []; LS.set("kasse-verkaeufe", []); $("loesch-frage").innerHTML = ""; renderVerkaeufe(); toast("Alle Verkäufe gelöscht"); }
  });
  document.addEventListener("change", function (ev) {
    if (ev.target.id !== "einlesen" || !ev.target.files || !ev.target.files[0]) return;
    var r = new FileReader();
    r.onload = function () {
      try {
        var d = JSON.parse(r.result);
        if (!d || d.app !== "basar-kasse" || !Array.isArray(d.verkaeufe)) throw new Error("falsch");
        var bekannt = {}; S.verkaeufe.forEach(function (v) { bekannt[v.id] = true; });
        var neu = d.verkaeufe.filter(function (v) { return v && v.id && !bekannt[v.id]; });
        S.verkaeufe = S.verkaeufe.concat(neu); LS.set("kasse-verkaeufe", S.verkaeufe);
        if (Array.isArray(d.notizen)) {
          var nb = {}; S.notizen.forEach(function (n) { nb[n.id] = true; });
          S.notizen = S.notizen.concat(d.notizen.filter(function (n) { return n && n.id && !nb[n.id]; })); LS.set("kasse-notizen", S.notizen);
        }
        if (d.paypal && typeof d.paypal.qr === "string" && /^data:image[/]/.test(d.paypal.qr)) { S.paypal = d.paypal; LS.set("kasse-paypal", d.paypal); }
        if (Array.isArray(d.vorbestellungen)) {
          var vbk = {}; S.vorbestellungen.forEach(function (x) { vbk[x.id] = true; });
          S.vorbestellungen = S.vorbestellungen.concat(d.vorbestellungen.filter(function (x) { return x && x.id && !vbk[x.id]; })); LS.set("kasse-vorbestellungen", S.vorbestellungen);
        }
        if (d.lager && typeof d.lager === "object" && d.lager.bestand) { S.lager = d.lager; LS.set("kasse-lager", d.lager); }
        if (d.ausverkauft && typeof d.ausverkauft === "object") { S.ausverkauft = d.ausverkauft; LS.set("kasse-ausverkauft", d.ausverkauft); }
        if (d.einst && Array.isArray(d.einst.produkte)) { S.einst = d.einst; LS.set("kasse-einst", d.einst); S.entwurfGeaendert = false; }
        renderAlles(); toast("Sicherung eingelesen: " + neu.length + " Verkäufe dazu");
      } catch (e) { toast("Diese Datei ist keine Sicherung der Basar-Kasse"); }
      ev.target.value = "";
    };
    r.readAsText(ev.target.files[0]);
  });
'''
    html = html.replace(start_alt, start_neu)

    assert "claude.use" not in html.split("<script>")[1], "Online-Aufrufe übrig"
    (HIER / "index.html").write_text(html, encoding="utf-8")

    (HIER / "manifest.webmanifest").write_text(json.dumps({
        "name": "Basar-Kasse", "short_name": "Kasse", "lang": "de",
        "start_url": "./", "scope": "./", "display": "standalone",
        "background_color": "#ffffff", "theme_color": "#ffffff",
        "icons": [
            {"src": "icon-192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"},
            {"src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"},
        ],
    }, ensure_ascii=False, indent=2), encoding="utf-8")

    (HIER / "sw.js").write_text('''// Hält die Basar-Kasse ohne Internet bereit. Bei jeder Änderung an index.html VERSION erhöhen.
const VERSION = "basar-kasse-9";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then((c) => c.match(e.request, { ignoreSearch: true }).then((treffer) => {
    const netz = fetch(e.request).then((antwort) => { if (antwort.ok) c.put(e.request, antwort.clone()); return antwort; }).catch(() => treffer);
    return treffer || netz;
  })));
});
''', encoding="utf-8")
    print("gebaut:", ", ".join(p.name for p in sorted(HIER.iterdir()) if p.suffix != ".py"))


if __name__ == "__main__":
    main()
