# PralinenBlatt

Bis zu sechs Pralinensorten auf einer A4-Seite im Querformat, als 3 × 2 farbige Karten.

## Aufbau

- `section.blatt` (297 × 210 mm, weiß) mit `header.kopf`, `.raster.raster--3` und `footer.fuss`.
- Kopf: `p.dach` („Handgemacht“), `h1.titel` mit zwei `svg.funkeln`, `p.info`. Rechts `.sticker` mit `<b>8 Stück</b><span>≈ 100 g</span>`.
- Karte: `article.karte` mit `style="--c: <Sortenfarbe>"`. Darin `.pille--alk` oder `.pille--ohne` (oben rechts), `.foto` (weißer Teller, freigestelltes PNG), `h2.name`, `p.zutaten`.
- Fuß: Adresse links, `.gruss` („Frohe Weihnachten!“ mit Funkeln) rechts.

## Was ihr liefert

Sortenname, Foto mit transparentem Hintergrund, Zutaten, Alkohol ja/nein und die Sortenfarbe (eine helle, kräftige Farbe; Text bleibt `tinte`).

## Regeln

- Maximal sechs Karten. Bei vier Sorten die `PralinenReihe` nehmen.
- Zutatenlisten bis ca. 150 Zeichen passen bequem.
