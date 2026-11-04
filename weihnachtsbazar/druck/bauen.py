#!/usr/bin/env python3
"""Erzeugt auslagen.html (A4 quer, eine Seite pro Warengruppe) aus den Daten unten.

Texte ändern -> hier ändern, dann:  python3 bauen.py  (und PDF neu drucken).
"""
from pathlib import Path
from html import escape

HIER = Path(__file__).parent
ADRESSE = "<b>Angelika Ruppel</b> · Talerweg 21 · 81825 München"
INFO_P = ("Mit belgischer Callebaut-Schokolade hergestellt. Ohne Konservierungsstoffe – "
          "gekühlt haltbar bis Jahresende.")

# name, foto, farbe, alkohol?, allergene, zutaten
PRALINEN_1 = [
    ("Kirschpralinen", "kirsch.png", "#ff8fa0", True, "Milch, Soja",
     "Vollmilchschokolade, Sahne, Luz-Träsch, Kirschlikör, Zartbitterschokolade"),
    ("Eierlikörpralinen", "eierlikoer.png", "#ffd75e", True, "Ei, Milch, Soja",
     "weiße Schokolade, Sahne, Eierlikör, Vanille, Zartbitterschokolade"),
    ("Baileys-Trüffel", "baileys.png", "#e8b994", True, "Milch, Soja",
     "Vollmilchschokolade, Sahne, Baileys"),
    ("Cointreau-Trüffel", "cointreau.png", "#d8c3b4", True, "Milch, Soja",
     "Vollmilchschokolade, Sahne, Cointreau, Zartbitterschokolade, Kakaopulver, Kristallzucker"),
    ("Limoncello-Trüffel", "limoncello.png", "#e6ee6e", True, "Ei, Milch, Soja",
     "weiße Schokolade, Zucker, Sahne, Eigelbpulver, Limoncello, Butter, Kakaobutter, "
     "Fruchtpulver Limette, Kristallzucker"),
    ("Aperolpralinen", "aperol.png", "#ff9b6a", True, "Milch, Soja",
     "weiße Schokolade, Sahne, Aperol, Orangensaft, Puderzucker, Orangenöl, Kristallzucker, "
     "Orangenfruchtpulver"),
]
PRALINEN_2 = [
    ("Karamell-Trüffel", "karamell.png", "#f7bb5c", False, "Milch, Soja",
     "Vollmilchschokolade, Sahne, Zucker, Honig"),
    ("Himbeerpralinen", "himbeer.png", "#ff86b0", False, "Milch, Soja",
     "weiße Schokolade, Himbeeren, Zitrone, Sahne, Zucker, Zartbitterschokolade, "
     "Fruchtpulver Himbeere, Kristallzucker"),
    ("Nougatpralinen", "nougat.png", "#d1a585", False, "Haselnüsse, Milch, Soja",
     "Nougat, Sahne, Vollmilchschokolade, Zartbitterschokolade"),
    ("Haselnusspralinen", "haselnuss.png", "#e7b97c", False, "Haselnüsse, Milch, Soja",
     "Vollmilchschokolade, Sahne, Zartbitterschokolade, Haselnusskrokant, Nussöl"),
]
DUBAI = ("Schokoladentafel Dubai-Style", "dubai.png", "#bfdc80", False,
         "Gluten (Weizen), Milch, Pistazien, Sesam, Soja",
         "Vollmilchschokolade, Kadayif, Pistaziencreme, Tahini, Butter, Rosenwasser")

# name, gewicht, latein, foto, farbe, verwendung
KRAEUTER = [
    ("Zitronenverbene", "6 g", "Aloysia citrodora", "zitronenverbene.jpg", "#f3ea7a",
     "Als Tee oder Erfrischungsgetränk, für Gebäck oder Süßspeisen, als Gewürzkraut für herzhafte "
     "Speisen. Das zitronenartige Aroma verleiht den Speisen eine besondere Note."),
    ("Marokkanische Minze", "12 g", "Mentha spicata", "minze.jpg", "#93e4c2",
     "Als Tee oder Erfrischungsgetränk, für Marinaden, Salate oder Soßen, für Taboulé und "
     "orientalische Gerichte."),
    ("Bergbohnenkraut", "20 g", "Satureja montana", "bergbohnenkraut.jpg", "#cbb8f2",
     "Passt sehr gut zu Hülsenfrüchten wie Bohnen, Linsen oder Erbsen, auch gut zu Lamm- und "
     "Wildgerichten."),
    ("Oregano", "15 g", "Origanum vulgare", "oregano.jpg", "#a6db88",
     "Beliebtes Gewürz der mediterranen Küche: für Pizza, Tomatensoße, Antipasti, Schmorgerichte, "
     "Aufläufe und Suppen."),
    ("Estragon", "17 g", "Artemisia dracunculus", "estragon.jpg", "#cfe9a6",
     "Für klassische Soßen, Fisch und Geflügel, Gemüse und Pilze. Estragon schmeckt leicht "
     "anisartig und pfeffrig-herb."),
    ("Französischer Thymian", "20 g", "Thymus „Fragrance d’été“", "thymian-franz.jpg", "#b5d1ad",
     "Für mediterrane Speisen, Suppen, Schmorgerichte, Eintöpfe, Lamm, Wild, Geflügel und "
     "Kartoffelgratin. Würzig-herb, leicht pfeffrig und harzig."),
    ("Limonenthymian", "18 g", "Thymus species", "limonenthymian.jpg", "#e3f28f",
     "Für mediterrane Speisen, Suppen, Schmorgerichte, Lamm, Fisch und Eintöpfe. Verbindet die "
     "herbe Würze des echten Thymians mit frischem Zitronenaroma."),
    ("Goldsalbei", "10 g · ganze Blätter", "Salvia officinalis", "goldsalbei.jpg", "#f4d27e",
     "Für Kalb, Hähnchen, Lamm, Fisch oder frittiert zu Pasta. Als Tee traditionell in der "
     "Erkältungszeit getrunken."),
]
CREDIT = "Fotos Estragon (CC BY-NC-ND) und Französischer Thymian (CC BY-SA): unbekannter Autor"

FUNKELN = ('<svg class="funkeln{extra}" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C13 8 16 11 24 12'
           'C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z"/></svg>')


def funkeln(extra=""):
    return FUNKELN.replace("{extra}", extra)


def kopf(dach, titel, info="", sticker=None, gruen=False):
    g = " funkeln--gruen" if gruen else ""
    st = ""
    if sticker:
        st = (f'<div class="sticker{" sticker--gruen" if gruen else ""}" aria-hidden="true">'
              f'<b>{sticker[0]}</b><span>{sticker[1]}</span></div>')
    info_html = f'<p class="info">{info}</p>' if info else ""
    return f"""
  <header class="kopf">
    <div class="kopf-text">
      <p class="dach{' dach--kraeuter' if gruen else ''}">{dach}</p>
      <h1 class="titel">{titel}{funkeln(g)}{funkeln(' funkeln--klein' + g)}</h1>
      {info_html}
    </div>
    {st}
  </header>"""


def fuss(credit=""):
    mitte = f'<span class="credit">{credit}</span>' if credit else ""
    return f"""
  <footer class="fuss"><span>{ADRESSE}</span>{mitte}<span class="gruss">{funkeln()}Frohe Weihnachten!</span></footer>"""


def pille(alk):
    return ('<span class="pille pille--alk">mit Alkohol</span>' if alk
            else '<span class="pille pille--ohne">ohne Alkohol</span>')


def praline(p):
    name, foto, farbe, alk, allerg, zut = p
    return f"""
    <article class="karte" style="--c:{farbe}">
      {pille(alk)}
      <div class="foto"><img src="fotos/{foto}" alt=""></div>
      <h2 class="name">{escape(name)}</h2>
      <p class="allergene"><b>Allergene:</b> {escape(allerg)}</p>
      <p class="zutaten"><b>Zutaten:</b> {escape(zut)}</p>
    </article>"""


def kraut(k):
    name, gew, lat, foto, farbe, verw = k
    return f"""
    <article class="karte karte--kraut" style="--c:{farbe}">
      <div class="kraut-kopf">
        <div class="foto foto--bild"><img src="fotos/{foto}" alt=""></div>
        <div>
          <span class="gewicht">{escape(gew)}</span>
          <p class="latein">{escape(lat)}</p>
        </div>
      </div>
      <h2 class="name">{escape(name)}</h2>
      <p class="zutaten"><b>Verwendung:</b> {escape(verw)}</p>
    </article>"""


seiten = []
seiten.append(f"""<section class="blatt">{kopf("Handgemacht", "Selbstgemachte Pralinen", INFO_P, ("8 Stück", "≈ 100 g"))}
  <div class="raster raster--3">{''.join(praline(p) for p in PRALINEN_1)}
  </div>{fuss()}
</section>""")
seiten.append(f"""<section class="blatt">{kopf("Handgemacht · ohne Alkohol", "Selbstgemachte Pralinen", INFO_P, ("8 Stück", "≈ 100 g"))}
  <div class="raster raster--4">{''.join(praline(p) for p in PRALINEN_2)}
  </div>{fuss()}
</section>""")
name, foto, farbe, alk, allerg, zut = DUBAI
seiten.append(f"""<section class="blatt">{kopf("Handgemacht", "Schokolade im Dubai-Style", INFO_P, ("ca.", "70 g"))}
  <article class="karte karte--gross" style="--c:{farbe}">
    <img class="tafel" src="fotos/{foto}" alt="">
    <div>
      <h2 class="name">{escape(name)}</h2>
      {pille(alk)}
      <p class="allergene"><b>Allergene:</b> {escape(allerg)}</p>
      <p class="zutaten"><b>Zutaten:</b> {escape(zut)}</p>
    </div>
  </article>{fuss()}
</section>""")
seiten.append(f"""<section class="blatt">{kopf("Für Küche &amp; Tee", "Unsere Kräuter", gruen=True)}
  <div class="raster raster--4x2">{''.join(kraut(k) for k in KRAEUTER)}
  </div>{fuss(CREDIT)}
</section>""")

css = (HIER / "auslagen.css").read_text(encoding="utf-8")
html = f"""<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bazar-Auslagen</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap">
<style>
{css}
</style>
</head>
<body>
{chr(10).join(seiten)}
</body>
</html>
"""
(HIER / "auslagen.html").write_text(html, encoding="utf-8")
print("auslagen.html geschrieben")
