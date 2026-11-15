# Weihnachtsbazar Auslagen

Kompakte A4-Blätter im Querformat für unseren Pralinen- und Kräuterstand: **eine Seite pro Warengruppe**, jede Sorte als farbige Karte mit Foto und Zutaten bzw. Verwendung. Frisch und fröhlich statt altbacken: kräftige Farbflächen auf weißem Grund, eine moderne Grotesk-Schrift, runde Aufkleber und rote Funkelsterne als weihnachtlicher Akzent.

## Die Blätter

| Blatt | Wofür | Raster |
| --- | --- | --- |
| **PralinenBlatt** | bis zu 6 Sorten (z. B. alle mit Alkohol) | 3 × 2 Karten |
| **PralinenReihe** | 4 Sorten mit großen Fotos (z. B. alle ohne Alkohol) | 4 × 1 Karten |
| **EinzelBlatt** | ein besonderes Produkt (Dubai-Schokolade) | 1 große Karte |
| **KraeuterBlatt** | bis zu 8 Kräuter | 4 × 2 Karten |

Jedes Blatt hat denselben Rahmen: **Kopf** (Dachzeile, Titel mit zwei Funkeln, eine Infozeile, rechts der runde Aufkleber mit der Menge), **Raster** der Karten, **Fuß** (Adresse links, „Frohe Weihnachten!“ rechts).

## Karten

- Jede Sorte hat **ihre eigene Farbe**, die zum Geschmack passt: Kirsche rosa, Eierlikör gelb, Limoncello limette, Aperol orange, Himbeere pink, Nougat und Haselnuss in Nusstönen, Dubai-Schokolade pistaziengrün. Bei den Kräutern Grüntöne, Zitronengelb für die Zitronen-Kräuter, Lavendel für das Bergbohnenkraut.
- Das Foto sitzt auf einem **weißen runden Teller**. So verschwinden unsaubere Ränder beim Freistellen, und alle Fotos wirken gleich.
- Oben rechts die Pille **„mit Alkohol“** (schwarz) oder **„ohne Alkohol“** (weiß). Eltern finden so auf einen Blick die Sorten für Kinder.
- Darunter Name und **Zutaten**. Auf den Farbkarten ist aller Text in `tinte` gesetzt, damit er auf jeder Farbe gut lesbar ist (mindestens 7,6 : 1).

## Inhalt & Ton

- Kurz und konkret, Sie-Form. Etiketten „Zutaten:“ und „Verwendung:“ immer fett.
- **Kräuter: keine Heilversprechen.** „Als Tee traditionell in der Erkältungszeit getrunken“ statt „hilft bei Husten“. Heilaussagen sind für Lebensmittel nicht erlaubt.
- Mengen mit Leerzeichen: `6 g`, `≈ 100 g`.
- Fotos mit Lizenzpflicht (z. B. CC BY) werden klein im Fuß genannt.

## Farben

- `weiss` ist der Grund. Er spart Toner, und die Farbkarten leuchten darauf.
- `tinte` für allen Text, `tinte-2` nur auf Weiß (Infozeile, Fuß).
- `rot` ist der weihnachtliche Akzent der Pralinen (Dachzeile, Funkeln, Aufkleber), `tanne` der der Kräuter.
- Die `sorte-…`- und `kraut-…`-Farben sind nur für Kartenflächen gedacht, nie für Text.

## Schrift

- **Bricolage Grotesque** (`--font-display`, 800) für Titel, Namen und Aufkleber: modern, mit etwas Charakter, eng gesetzt (−0,025 bis −0,035 em).
- **DM Sans** (`--font-sans`) für alles Lesbare: Zutaten, Verwendung, Infozeile.

Beide gibt es kostenlos bei Google Fonts.

## Formen

- Große, weiche Ecken (`radius-lg`, 28 px) für Karten, alles andere rund (`radius-rund`).
- **Funkeln**: ein vierzackiger Stern, zwei hinter jedem Titel und einer vor dem Gruß. Mehr Weihnachtsdeko braucht es nicht.
- Der **Aufkleber** ist leicht gedreht (−9°), wie ein echtes Preisetikett.
- Keine Schatten, keine Verläufe, keine Linien als Zierde.

## Drucken

- A4 **Querformat**, Skalierung **100 %**, Ränder „Keine“, **„Hintergrundgrafiken drucken“** einschalten.
- Für Affinity gibt es das Paket in `affinity/` (Vektor-PDF, Schriften, Fotos, Farbpalette `Farben.ase`, Maßblatt).
- Die Blätter sind aus `druck/bauen.py` erzeugt. Texte dort ändern und neu bauen, dann bleibt alles einheitlich.
- Am Stand in A4-Acryl-Aufsteller oder in Klarsichthüllen. Die Farbflächen sind auch aus zwei Metern gut zu unterscheiden.
