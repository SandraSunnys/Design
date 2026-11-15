# Anweisung: Weihnachtsbazar-Auslagen in Affinity setzen

Bitte setze mit deinem Affinity-Zugang ein Dokument mit **4 Seiten A4 quer** für unseren Pralinen- und Kräuterstand. Alle Inhalte, Maße, Farben und Schriften stehen unten. Bitte **nichts am Text ändern oder ergänzen**, keine Allergene hinzufügen und keine weiteren Deko-Elemente erfinden.

## 0. Vorbereitung

1. Frag mich zuerst nach dem Pfad des entpackten Ordners **„Weihnachtsbazar_Affinity“** (aus der ZIP-Datei). Darin liegen:
   - `Fotos/`: alle Produktfotos (Pralinen als freigestellte PNG, Kräuter als JPG),
   - `Vorschau/Seite-1.png` bis `Seite-4.png`: so soll das Ergebnis aussehen,
   - `Auslagen_Affinity.pdf`: dieselben Seiten als Vektor-PDF,
   - `Farben.ase`: Farbpalette, `Schriften/`: die Schriftdateien.
2. Prüfe, ob die Schriften **Bricolage Grotesque ExtraBold** und **DM Sans** (Regular, Italic, SemiBold, Bold) installiert sind. Falls nicht: bitte mich, die .ttf-Dateien aus `Schriften/` zu installieren und Affinity neu zu starten.
3. Schau dir die vier Vorschaubilder an, bevor du anfängst.
4. **Weg wählen:** Kann dein Affinity-Zugang Formen, Text und Bilder anlegen, baue das Dokument neu nach den Angaben unten (sauberste Ebenen). Kann er nur Dateien öffnen, öffne `Auslagen_Affinity.pdf` mit bearbeitbarem Text und setze dann nur die Dachzeilen, die „MIT/OHNE ALKOHOL“-Pillen und die runden Aufkleber neu, denn die kommen beim PDF-Import oft als Einzelbuchstaben an.

## 1. Dokument

- 4 Seiten bzw. Zeichenflächen, je **297 × 210 mm** (A4 quer), Farbraum RGB, 300 dpi.
- Maßeinheit mm; alle Positionen unten sind die **linke obere Ecke**, gemessen von der linken oberen Seitenecke.
- Hintergrund jeder Seite: Weiß.
- Ebenen: pro Seite eine Gruppe „Kopf“, eine Gruppe je Karte (benannt nach dem Produkt), eine Gruppe „Fuß“.

## 2. Farben (als Palette „Weihnachtsbazar“ anlegen oder Farben.ase importieren)

| Name | HEX | Verwendung |
|---|---|---|
| Weiß | #FFFFFF | Grund, Foto-Teller, Pille „ohne Alkohol“, Gewichts-Pille |
| Tinte | #1D1B1A | **aller Text auf den Karten**, Pille „mit Alkohol“ |
| Tinte 2 | #5C5652 | Infozeile und Fußzeile (nur auf Weiß) |
| Rot | #C8102E | Dachzeile, Funkeln und Aufkleber bei Pralinen, „Frohe Weihnachten!“ |
| Tanne | #0F5B45 | Dachzeile und Funkeln bei Kräutern |
| Kirschpralinen | #FF8FA0 | Kartenfläche |
| Eierlikörpralinen | #FFD75E | Kartenfläche |
| Baileys-Trüffel | #E8B994 | Kartenfläche |
| Cointreau-Trüffel | #D8C3B4 | Kartenfläche |
| Limoncello-Trüffel | #E6EE6E | Kartenfläche |
| Aperolpralinen | #FF9B6A | Kartenfläche |
| Karamell-Trüffel | #F7BB5C | Kartenfläche |
| Himbeerpralinen | #FF86B0 | Kartenfläche |
| Nougatpralinen | #D1A585 | Kartenfläche |
| Haselnusspralinen | #E7B97C | Kartenfläche |
| Schokoladentafel Dubai-Style | #BFDC80 | Kartenfläche |
| Zitronenverbene | #F3EA7A | Kartenfläche |
| Marokkanische Minze | #93E4C2 | Kartenfläche |
| Bergbohnenkraut | #CBB8F2 | Kartenfläche |
| Oregano | #A6DB88 | Kartenfläche |
| Estragon | #CFE9A6 | Kartenfläche |
| Französischer Thymian | #B5D1AD | Kartenfläche |
| Limonenthymian | #E3F28F | Kartenfläche |
| Goldsalbei | #F4D27E | Kartenfläche |

## 3. Gestaltungsregeln

- **Karten:** Rechteck ohne Kontur, Fläche in der Sortenfarbe, **Eckenradius 7,4 mm** an allen Ecken.
- **Foto-Teller:** weißer Kreis ohne Kontur. Pralinenfoto (PNG, transparent) mittig darin, auf **88 %** des Kreisdurchmessers eingepasst (Seitenverhältnis behalten). Kräuterfoto füllt den Kreis ganz aus und wird **rund maskiert** (in den Kreis einfügen / Maske).
- **Pillen** („MIT ALKOHOL“, „OHNE ALKOHOL“, Gewicht): Rechteck mit voll abgerundeten Ecken (Radius = halbe Höhe), Text darin mittig.
- **Funkeln:** vierzackiger Stern mit nach innen gewölbten Seiten. Als Kurve: Start oben Mitte, je Viertel eine Kurve durch die Mitte (SVG-Pfad im 24-Einheiten-Raster: `M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z`). Alternativ aus `Auslagen_Affinity.pdf` kopieren.
- **Aufkleber:** Kreis in Rot, zwei Textzeilen weiß und zentriert, Kreis samt Text **um 9° gegen den Uhrzeigersinn gedreht** (−9°).
- Keine Schatten, keine Verläufe, keine Konturen.
- Etiketten **„Zutaten:“** und **„Verwendung:“** in DM Sans Bold, der Rest der Zeile Regular.
- Textrahmen: Positionsangaben sind die Oberkante des Textrahmens; Breite wie angegeben, Höhe nach Bedarf. Kleine Abweichungen (±0,5 mm) sind in Ordnung, Hauptsache es sieht aus wie die Vorschau.

## 4. Seite 1: Selbstgemachte Pralinen

Vorschau: `Vorschau/Seite-1.png`

### Kopf

- **Dachzeile:** „HANDGEMACHT“, Textrahmen x 11,6 mm, y 9,0 mm, Breite 202,1 mm. DM Sans Bold, 9,8 pt, Zeilenabstand 13,5 pt, Laufweite 140 ‰, Versalien, Farbe #C8102E.
- **Seitentitel:** „Selbstgemachte Pralinen“, Textrahmen x 11,6 mm, y 15,3 mm, Breite 178,9 mm. Bricolage Grotesque ExtraBold, 43,5 pt, Zeilenabstand 41,3 pt, Laufweite -35 ‰, Farbe #1D1B1A.
- **Infozeile:** „Mit belgischer Callebaut-Schokolade hergestellt. Ohne Konservierungsstoffe – gekühlt haltbar bis Jahresende.“, Textrahmen x 11,6 mm, y 36,8 mm, Breite 202,1 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #5C5652.
- **Funkeln 1:** x 192,7 mm, y 17,5 mm, 7,9 × 7,9 mm, Farbe #C8102E.
- **Funkeln 2:** x 201,2 mm, y 15,3 mm, 4,8 × 4,8 mm, Farbe #C8102E.
- **Aufkleber:** Kreis Ø 32,8 mm, Mittelpunkt bei x 267,4 mm, y 26,0 mm, Farbe #C8102E, um −9° gedreht. Text zentriert, zwei Zeilen: „8 Stück“ (Bricolage Grotesque ExtraBold, 22,5 pt, Zeilenabstand 22,5 pt, Laufweite -30 ‰, Farbe #FFFFFF) und darunter „≈ 100 g“ (DM Sans SemiBold, 11,3 pt, Zeilenabstand 12,4 pt, Farbe #FFFFFF).

### Karten

**Kirschpralinen:** Karte x 11,6 mm, y 47,1 mm, 88,8 × 72,4 mm, Fläche #FF8FA0, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 16,9 mm, y 51,4 mm, Ø 29,6 mm, Foto `Fotos/kirsch.png` mittig, 88 % eingepasst.
- Pille „MIT ALKOHOL“: x 67,6 mm, y 51,9 mm, 28,0 × 6,3 mm, Fläche #1D1B1A, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #FFFFFF.
- Name: Textrahmen x 16,9 mm, y 83,6 mm, Breite 78,7 mm. Bricolage Grotesque ExtraBold, 18 pt, Zeilenabstand 18,4 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Kirschpralinen“
- Zutaten: Textrahmen x 16,9 mm, y 92,2 mm, Breite 78,7 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Vollmilchschokolade, Sahne, Luz-Träsch, Kirschlikör, Zartbitterschokolade“

**Eierlikörpralinen:** Karte x 104,1 mm, y 47,1 mm, 88,8 × 72,4 mm, Fläche #FFD75E, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 109,4 mm, y 51,4 mm, Ø 29,6 mm, Foto `Fotos/eierlikoer.png` mittig, 88 % eingepasst.
- Pille „MIT ALKOHOL“: x 160,1 mm, y 51,9 mm, 28,0 × 6,3 mm, Fläche #1D1B1A, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #FFFFFF.
- Name: Textrahmen x 109,4 mm, y 83,6 mm, Breite 78,7 mm. Bricolage Grotesque ExtraBold, 18 pt, Zeilenabstand 18,4 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Eierlikörpralinen“
- Zutaten: Textrahmen x 109,4 mm, y 92,2 mm, Breite 78,7 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: weiße Schokolade, Sahne, Eierlikör, Vanille, Zartbitterschokolade“

**Baileys-Trüffel:** Karte x 196,6 mm, y 47,1 mm, 88,8 × 72,4 mm, Fläche #E8B994, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 201,9 mm, y 51,4 mm, Ø 29,6 mm, Foto `Fotos/baileys.png` mittig, 88 % eingepasst.
- Pille „MIT ALKOHOL“: x 252,6 mm, y 51,9 mm, 28,0 × 6,3 mm, Fläche #1D1B1A, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #FFFFFF.
- Name: Textrahmen x 201,9 mm, y 83,6 mm, Breite 78,7 mm. Bricolage Grotesque ExtraBold, 18 pt, Zeilenabstand 18,4 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Baileys-Trüffel“
- Zutaten: Textrahmen x 201,9 mm, y 92,2 mm, Breite 78,7 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Vollmilchschokolade, Sahne, Baileys“

**Cointreau-Trüffel:** Karte x 11,6 mm, y 123,3 mm, 88,8 × 72,4 mm, Fläche #D8C3B4, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 16,9 mm, y 127,5 mm, Ø 29,6 mm, Foto `Fotos/cointreau.png` mittig, 88 % eingepasst.
- Pille „MIT ALKOHOL“: x 67,6 mm, y 128,0 mm, 28,0 × 6,3 mm, Fläche #1D1B1A, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #FFFFFF.
- Name: Textrahmen x 16,9 mm, y 159,8 mm, Breite 78,7 mm. Bricolage Grotesque ExtraBold, 18 pt, Zeilenabstand 18,4 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Cointreau-Trüffel“
- Zutaten: Textrahmen x 16,9 mm, y 168,4 mm, Breite 78,7 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Vollmilchschokolade, Sahne, Cointreau, Zartbitterschokolade, Kakaopulver, Kristallzucker“

**Limoncello-Trüffel:** Karte x 104,1 mm, y 123,3 mm, 88,8 × 72,4 mm, Fläche #E6EE6E, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 109,4 mm, y 127,5 mm, Ø 29,6 mm, Foto `Fotos/limoncello.png` mittig, 88 % eingepasst.
- Pille „MIT ALKOHOL“: x 160,1 mm, y 128,0 mm, 28,0 × 6,3 mm, Fläche #1D1B1A, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #FFFFFF.
- Name: Textrahmen x 109,4 mm, y 159,8 mm, Breite 78,7 mm. Bricolage Grotesque ExtraBold, 18 pt, Zeilenabstand 18,4 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Limoncello-Trüffel“
- Zutaten: Textrahmen x 109,4 mm, y 168,4 mm, Breite 78,7 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: weiße Schokolade, Zucker, Sahne, Eigelbpulver, Limoncello, Butter, Kakaobutter, Fruchtpulver Limette, Kristallzucker“

**Aperolpralinen:** Karte x 196,6 mm, y 123,3 mm, 88,8 × 72,4 mm, Fläche #FF9B6A, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 201,9 mm, y 127,5 mm, Ø 29,6 mm, Foto `Fotos/aperol.png` mittig, 88 % eingepasst.
- Pille „MIT ALKOHOL“: x 252,6 mm, y 128,0 mm, 28,0 × 6,3 mm, Fläche #1D1B1A, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #FFFFFF.
- Name: Textrahmen x 201,9 mm, y 159,8 mm, Breite 78,7 mm. Bricolage Grotesque ExtraBold, 18 pt, Zeilenabstand 18,4 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Aperolpralinen“
- Zutaten: Textrahmen x 201,9 mm, y 168,4 mm, Breite 78,7 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: weiße Schokolade, Sahne, Aperol, Orangensaft, Puderzucker, Orangenöl, Kristallzucker, Orangenfruchtpulver“

### Fuß

- **Adresse („Angelika Ruppel“ in DM Sans Bold, Farbe #1D1B1A, Rest Regular):** „Angelika Ruppel · Talerweg 21 · 81825 München“, x 11,6 mm, y 199,4 mm, Breite 75,3 mm. DM Sans Regular, 9,8 pt, Zeilenabstand 13,5 pt, Farbe #5C5652.
- **Gruß (mit kleinem Funkeln 3,7 × 3,7 mm in Rot davor, Abstand 1,6 mm):** „Frohe Weihnachten!“, x 241,2 mm, y 199,8 mm, Breite 44,7 mm. Bricolage Grotesque ExtraBold, 11,3 pt, Zeilenabstand 11,3 pt, Laufweite -10 ‰, Farbe #C8102E.

## 5. Seite 2: Selbstgemachte Pralinen

Vorschau: `Vorschau/Seite-2.png`

### Kopf

- **Dachzeile:** „HANDGEMACHT · OHNE ALKOHOL“, Textrahmen x 11,6 mm, y 9,0 mm, Breite 202,1 mm. DM Sans Bold, 9,8 pt, Zeilenabstand 13,5 pt, Laufweite 140 ‰, Versalien, Farbe #C8102E.
- **Seitentitel:** „Selbstgemachte Pralinen“, Textrahmen x 11,6 mm, y 15,3 mm, Breite 178,9 mm. Bricolage Grotesque ExtraBold, 43,5 pt, Zeilenabstand 41,3 pt, Laufweite -35 ‰, Farbe #1D1B1A.
- **Infozeile:** „Mit belgischer Callebaut-Schokolade hergestellt. Ohne Konservierungsstoffe – gekühlt haltbar bis Jahresende.“, Textrahmen x 11,6 mm, y 36,8 mm, Breite 202,1 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #5C5652.
- **Funkeln 1:** x 192,7 mm, y 17,5 mm, 7,9 × 7,9 mm, Farbe #C8102E.
- **Funkeln 2:** x 201,2 mm, y 15,3 mm, 4,8 × 4,8 mm, Farbe #C8102E.
- **Aufkleber:** Kreis Ø 32,8 mm, Mittelpunkt bei x 267,4 mm, y 26,0 mm, Farbe #C8102E, um −9° gedreht. Text zentriert, zwei Zeilen: „8 Stück“ (Bricolage Grotesque ExtraBold, 22,5 pt, Zeilenabstand 22,5 pt, Laufweite -30 ‰, Farbe #FFFFFF) und darunter „≈ 100 g“ (DM Sans SemiBold, 11,3 pt, Zeilenabstand 12,4 pt, Farbe #FFFFFF).

### Karten

**Karamell-Trüffel:** Karte x 11,6 mm, y 47,1 mm, 65,6 × 148,6 mm, Fläche #F7BB5C, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 20,1 mm, y 61,9 mm, Ø 48,7 mm, Foto `Fotos/karamell.png` mittig, 88 % eingepasst.
- Pille „OHNE ALKOHOL“: x 41,1 mm, y 51,9 mm, 31,4 × 6,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #1D1B1A.
- Name: Textrahmen x 17,5 mm, y 118,0 mm, Breite 54,5 mm. Bricolage Grotesque ExtraBold, 17,3 pt, Zeilenabstand 17,6 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Karamell-Trüffel“
- Zutaten: Textrahmen x 17,5 mm, y 127,4 mm, Breite 54,5 mm. DM Sans Regular, 12,8 pt, Zeilenabstand 18 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Vollmilchschokolade, Sahne, Zucker, Honig“

**Himbeerpralinen:** Karte x 81,0 mm, y 47,1 mm, 65,6 × 148,6 mm, Fläche #FF86B0, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 89,5 mm, y 61,9 mm, Ø 48,7 mm, Foto `Fotos/himbeer.png` mittig, 88 % eingepasst.
- Pille „OHNE ALKOHOL“: x 110,4 mm, y 51,9 mm, 31,4 × 6,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #1D1B1A.
- Name: Textrahmen x 86,8 mm, y 118,0 mm, Breite 54,5 mm. Bricolage Grotesque ExtraBold, 17,3 pt, Zeilenabstand 17,6 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Himbeerpralinen“
- Zutaten: Textrahmen x 86,8 mm, y 127,4 mm, Breite 54,5 mm. DM Sans Regular, 12,8 pt, Zeilenabstand 18 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: weiße Schokolade, Himbeeren, Zitrone, Sahne, Zucker, Zartbitterschokolade, Fruchtpulver Himbeere, Kristallzucker“

**Nougatpralinen:** Karte x 150,3 mm, y 47,1 mm, 65,6 × 148,6 mm, Fläche #D1A585, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 158,8 mm, y 61,9 mm, Ø 48,7 mm, Foto `Fotos/nougat.png` mittig, 88 % eingepasst.
- Pille „OHNE ALKOHOL“: x 179,8 mm, y 51,9 mm, 31,4 × 6,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #1D1B1A.
- Name: Textrahmen x 156,2 mm, y 118,0 mm, Breite 54,5 mm. Bricolage Grotesque ExtraBold, 17,3 pt, Zeilenabstand 17,6 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Nougatpralinen“
- Zutaten: Textrahmen x 156,2 mm, y 127,4 mm, Breite 54,5 mm. DM Sans Regular, 12,8 pt, Zeilenabstand 18 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Nougat, Sahne, Vollmilchschokolade, Zartbitterschokolade“

**Haselnusspralinen:** Karte x 219,7 mm, y 47,1 mm, 65,7 × 148,6 mm, Fläche #E7B97C, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 228,2 mm, y 61,9 mm, Ø 48,7 mm, Foto `Fotos/haselnuss.png` mittig, 88 % eingepasst.
- Pille „OHNE ALKOHOL“: x 249,2 mm, y 51,9 mm, 31,4 × 6,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 8,6 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #1D1B1A.
- Name: Textrahmen x 225,5 mm, y 118,0 mm, Breite 54,5 mm. Bricolage Grotesque ExtraBold, 17,3 pt, Zeilenabstand 17,6 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Haselnusspralinen“
- Zutaten: Textrahmen x 225,5 mm, y 127,4 mm, Breite 54,5 mm. DM Sans Regular, 12,8 pt, Zeilenabstand 18 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Vollmilchschokolade, Sahne, Zartbitterschokolade, Haselnusskrokant, Nussöl“

### Fuß

- **Adresse („Angelika Ruppel“ in DM Sans Bold, Farbe #1D1B1A, Rest Regular):** „Angelika Ruppel · Talerweg 21 · 81825 München“, x 11,6 mm, y 199,4 mm, Breite 75,3 mm. DM Sans Regular, 9,8 pt, Zeilenabstand 13,5 pt, Farbe #5C5652.
- **Gruß (mit kleinem Funkeln 3,7 × 3,7 mm in Rot davor, Abstand 1,6 mm):** „Frohe Weihnachten!“, x 241,2 mm, y 199,8 mm, Breite 44,7 mm. Bricolage Grotesque ExtraBold, 11,3 pt, Zeilenabstand 11,3 pt, Laufweite -10 ‰, Farbe #C8102E.

## 6. Seite 3: Schokolade im Dubai-Style

Vorschau: `Vorschau/Seite-3.png`

### Kopf

- **Dachzeile:** „HANDGEMACHT“, Textrahmen x 11,6 mm, y 9,0 mm, Breite 206,6 mm. DM Sans Bold, 9,8 pt, Zeilenabstand 13,5 pt, Laufweite 140 ‰, Versalien, Farbe #C8102E.
- **Seitentitel:** „Schokolade im Dubai-Style“, Textrahmen x 11,6 mm, y 15,3 mm, Breite 190,7 mm. Bricolage Grotesque ExtraBold, 43,5 pt, Zeilenabstand 41,3 pt, Laufweite -35 ‰, Farbe #1D1B1A.
- **Infozeile:** „Mit belgischer Callebaut-Schokolade hergestellt. Ohne Konservierungsstoffe – gekühlt haltbar bis Jahresende.“, Textrahmen x 11,6 mm, y 36,8 mm, Breite 206,6 mm. DM Sans Regular, 11,3 pt, Zeilenabstand 15,8 pt, Farbe #5C5652.
- **Funkeln 1:** x 204,5 mm, y 17,5 mm, 7,9 × 7,9 mm, Farbe #C8102E.
- **Funkeln 2:** x 213,0 mm, y 15,3 mm, 4,8 × 4,8 mm, Farbe #C8102E.
- **Aufkleber:** Kreis Ø 32,8 mm, Mittelpunkt bei x 267,4 mm, y 26,0 mm, Farbe #C8102E, um −9° gedreht. Text zentriert, zwei Zeilen: „ca.“ (Bricolage Grotesque ExtraBold, 22,5 pt, Zeilenabstand 22,5 pt, Laufweite -30 ‰, Farbe #FFFFFF) und darunter „70 g“ (DM Sans SemiBold, 11,3 pt, Zeilenabstand 12,4 pt, Farbe #FFFFFF).

### Karten

**Schokoladentafel Dubai-Style:** Karte x 11,6 mm, y 47,1 mm, 273,7 × 148,6 mm, Fläche #BFDC80, Eckenradius 7,4 mm.
- Foto `Fotos/dubai.png` (freigestellt, direkt auf der Fläche): x 19,1 mm, y 76,6 mm, eingepasst in 138,3 × 89,6 mm.
- Pille „OHNE ALKOHOL“: x 166,9 mm, y 118,2 mm, 35,9 × 6,9 mm, Fläche #FFFFFF, Text DM Sans Bold, 9,8 pt, Zeilenabstand 12 pt, Laufweite 70 ‰, Versalien, Farbe #1D1B1A.
- Name: Textrahmen x 166,9 mm, y 87,5 mm, Breite 110,7 mm. Bricolage Grotesque ExtraBold, 37,5 pt, Zeilenabstand 36,8 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Schokoladentafel Dubai-Style“
- Zutaten: Textrahmen x 166,9 mm, y 129,9 mm, Breite 110,7 mm. DM Sans Regular, 16,5 pt, Zeilenabstand 24 pt, Farbe #1D1B1A („Zutaten:“ in DM Sans Bold). Text: „Zutaten: Vollmilchschokolade, Kadayif, Pistaziencreme, Tahini, Butter, Rosenwasser“

### Fuß

- **Adresse („Angelika Ruppel“ in DM Sans Bold, Farbe #1D1B1A, Rest Regular):** „Angelika Ruppel · Talerweg 21 · 81825 München“, x 11,6 mm, y 199,4 mm, Breite 75,3 mm. DM Sans Regular, 9,8 pt, Zeilenabstand 13,5 pt, Farbe #5C5652.
- **Gruß (mit kleinem Funkeln 3,7 × 3,7 mm in Rot davor, Abstand 1,6 mm):** „Frohe Weihnachten!“, x 241,2 mm, y 199,8 mm, Breite 44,7 mm. Bricolage Grotesque ExtraBold, 11,3 pt, Zeilenabstand 11,3 pt, Laufweite -10 ‰, Farbe #C8102E.

## 7. Seite 4: Unsere Kräuter

Vorschau: `Vorschau/Seite-4.png`

### Kopf

- **Dachzeile:** „FÜR KÜCHE & TEE“, Textrahmen x 11,6 mm, y 9,0 mm, Breite 125,0 mm. DM Sans Bold, 9,8 pt, Zeilenabstand 13,5 pt, Laufweite 140 ‰, Versalien, Farbe #0F5B45.
- **Seitentitel:** „Unsere Kräuter“, Textrahmen x 11,6 mm, y 15,3 mm, Breite 109,1 mm. Bricolage Grotesque ExtraBold, 43,5 pt, Zeilenabstand 41,3 pt, Laufweite -35 ‰, Farbe #1D1B1A.
- **Funkeln 1:** x 122,9 mm, y 17,5 mm, 7,9 × 7,9 mm, Farbe #0F5B45.
- **Funkeln 2:** x 131,4 mm, y 15,3 mm, 4,8 × 4,8 mm, Farbe #0F5B45.

### Karten

**Zitronenverbene:** Karte x 11,6 mm, y 39,4 mm, 66,0 × 76,5 mm, Fläche #F3EA7A, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 15,9 mm, y 43,2 mm, Ø 22,2 mm, Foto `Fotos/zitronenverbene.jpg` rund maskiert, füllend.
- Pille „6 g“: x 41,3 mm, y 49,1 mm, 9,4 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 15,9 mm, y 68,0 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Zitronenverbene“
- Botanischer Name: Textrahmen x 41,3 mm, y 55,7 mm, Breite 26,5 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Aloysia citrodora“
- Verwendung: Textrahmen x 15,9 mm, y 75,0 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Als Tee oder Erfrischungsgetränk, für Gebäck oder Süßspeisen, als Gewürzkraut für herzhafte Speisen. Das zitronenartige Aroma verleiht den Speisen eine besondere Note.“

**Marokkanische Minze:** Karte x 80,9 mm, y 39,4 mm, 66,0 × 76,5 mm, Fläche #93E4C2, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 85,1 mm, y 43,2 mm, Ø 22,2 mm, Foto `Fotos/minze.jpg` rund maskiert, füllend.
- Pille „12 g“: x 110,5 mm, y 49,1 mm, 10,4 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 85,1 mm, y 68,0 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Marokkanische Minze“
- Botanischer Name: Textrahmen x 110,5 mm, y 55,7 mm, Breite 24,4 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Mentha spicata“
- Verwendung: Textrahmen x 85,1 mm, y 75,0 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Als Tee oder Erfrischungsgetränk, für Marinaden, Salate oder Soßen, für Taboulé und orientalische Gerichte.“

**Bergbohnenkraut:** Karte x 150,1 mm, y 39,4 mm, 66,0 × 76,5 mm, Fläche #CBB8F2, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 154,3 mm, y 43,2 mm, Ø 22,2 mm, Foto `Fotos/bergbohnenkraut.jpg` rund maskiert, füllend.
- Pille „20 g“: x 179,7 mm, y 49,1 mm, 11,5 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 154,3 mm, y 68,0 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Bergbohnenkraut“
- Botanischer Name: Textrahmen x 179,7 mm, y 55,7 mm, Breite 27,7 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Satureja montana“
- Verwendung: Textrahmen x 154,3 mm, y 75,0 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Passt sehr gut zu Hülsenfrüchten wie Bohnen, Linsen oder Erbsen, auch gut zu Lamm- und Wildgerichten.“

**Oregano:** Karte x 219,3 mm, y 39,4 mm, 66,1 × 76,5 mm, Fläche #A6DB88, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 223,5 mm, y 43,2 mm, Ø 22,2 mm, Foto `Fotos/oregano.jpg` rund maskiert, füllend.
- Pille „15 g“: x 248,9 mm, y 49,1 mm, 10,5 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 223,5 mm, y 68,0 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Oregano“
- Botanischer Name: Textrahmen x 248,9 mm, y 55,7 mm, Breite 27,6 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Origanum vulgare“
- Verwendung: Textrahmen x 223,5 mm, y 75,0 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Beliebtes Gewürz der mediterranen Küche: für Pizza, Tomatensoße, Antipasti, Schmorgerichte, Aufläufe und Suppen.“

**Estragon:** Karte x 11,6 mm, y 119,2 mm, 66,0 × 76,5 mm, Fläche #CFE9A6, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 15,9 mm, y 122,9 mm, Ø 22,2 mm, Foto `Fotos/estragon.jpg` rund maskiert, füllend.
- Pille „17 g“: x 41,3 mm, y 126,7 mm, 10,3 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 15,9 mm, y 147,7 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Estragon“
- Botanischer Name: Textrahmen x 41,3 mm, y 133,3 mm, Breite 32,7 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Artemisia dracunculus“
- Verwendung: Textrahmen x 15,9 mm, y 154,7 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Für klassische Soßen, Fisch und Geflügel, Gemüse und Pilze. Estragon schmeckt leicht anisartig und pfeffrig-herb.“

**Französischer Thymian:** Karte x 80,9 mm, y 119,2 mm, 66,0 × 76,5 mm, Fläche #B5D1AD, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 85,1 mm, y 122,9 mm, Ø 22,2 mm, Foto `Fotos/thymian-franz.jpg` rund maskiert, füllend.
- Pille „20 g“: x 110,5 mm, y 126,7 mm, 11,5 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 85,1 mm, y 147,7 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Französischer Thymian“
- Botanischer Name: Textrahmen x 110,5 mm, y 133,3 mm, Breite 32,7 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Thymus „Fragrance d’été““
- Verwendung: Textrahmen x 85,1 mm, y 160,1 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Für mediterrane Speisen, Suppen, Schmorgerichte, Eintöpfe, Lamm, Wild, Geflügel und Kartoffelgratin. Würzig-herb, leicht pfeffrig und harzig.“

**Limonenthymian:** Karte x 150,1 mm, y 119,2 mm, 66,0 × 76,5 mm, Fläche #E3F28F, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 154,3 mm, y 122,9 mm, Ø 22,2 mm, Foto `Fotos/limonenthymian.jpg` rund maskiert, füllend.
- Pille „18 g“: x 179,7 mm, y 128,8 mm, 10,6 × 5,3 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 154,3 mm, y 147,7 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Limonenthymian“
- Botanischer Name: Textrahmen x 179,7 mm, y 135,4 mm, Breite 25,4 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Thymus species“
- Verwendung: Textrahmen x 154,3 mm, y 154,7 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Für mediterrane Speisen, Suppen, Schmorgerichte, Lamm, Fisch und Eintöpfe. Verbindet die herbe Würze des echten Thymians mit frischem Zitronenaroma.“

**Goldsalbei:** Karte x 219,3 mm, y 119,2 mm, 66,1 × 76,5 mm, Fläche #F4D27E, Eckenradius 7,4 mm.
- Foto-Teller: weißer Kreis x 223,5 mm, y 122,9 mm, Ø 22,2 mm, Foto `Fotos/goldsalbei.jpg` rund maskiert, füllend.
- Pille „10 g · ganze Blätter“: x 248,9 mm, y 126,4 mm, 32,2 × 9,5 mm, Fläche #FFFFFF, Text DM Sans Bold, 9 pt, Zeilenabstand 12 pt, Farbe #1D1B1A.
- Name: Textrahmen x 223,5 mm, y 147,7 mm, Breite 58,1 mm. Bricolage Grotesque ExtraBold, 15 pt, Zeilenabstand 15,3 pt, Laufweite -25 ‰, Farbe #1D1B1A. Text: „Goldsalbei“
- Botanischer Name: Textrahmen x 248,9 mm, y 137,3 mm, Breite 32,7 mm. DM Sans Italic, 9,4 pt, Zeilenabstand 12 pt, Farbe #1D1B1A. Text: „Salvia officinalis“
- Verwendung: Textrahmen x 223,5 mm, y 154,7 mm, Breite 58,1 mm. DM Sans Regular, 10,1 pt, Zeilenabstand 13,9 pt, Farbe #1D1B1A („Verwendung:“ in DM Sans Bold). Text: „Verwendung: Für Kalb, Hähnchen, Lamm, Fisch oder frittiert zu Pasta. Als Tee traditionell in der Erkältungszeit getrunken.“

### Fuß

- **Adresse („Angelika Ruppel“ in DM Sans Bold, Farbe #1D1B1A, Rest Regular):** „Angelika Ruppel · Talerweg 21 · 81825 München“, x 11,6 mm, y 199,4 mm, Breite 75,3 mm. DM Sans Regular, 9,8 pt, Zeilenabstand 13,5 pt, Farbe #5C5652.
- **Bildnachweis:** „Fotos Estragon (CC BY-NC-ND) und Französischer Thymian (CC BY-SA): unbekannter Autor“, x 105,5 mm, y 199,4 mm, Breite 117,1 mm. DM Sans Regular, 7,9 pt, Zeilenabstand 13,5 pt, Farbe #5C5652.
- **Gruß (mit kleinem Funkeln 3,7 × 3,7 mm in Rot davor, Abstand 1,6 mm):** „Frohe Weihnachten!“, x 241,2 mm, y 199,8 mm, Breite 44,7 mm. Bricolage Grotesque ExtraBold, 11,3 pt, Zeilenabstand 11,3 pt, Laufweite -10 ‰, Farbe #C8102E.

## 8. Zum Schluss

1. Jede Seite als PNG exportieren und mit `Vorschau/Seite-N.png` vergleichen. Abweichungen korrigieren (vor allem: Text läuft aus einer Karte heraus, Foto nicht mittig im Teller, falsche Schrift).
2. Das Dokument im Ordner „Weihnachtsbazar_Affinity“ speichern als **„Weihnachtsbazar_Auslagen“** (Affinity-Format).
3. Zusätzlich ein **druckfertiges PDF** exportieren: alle 4 Seiten, A4 quer, ohne Beschnitt, Schriften eingebettet, Dateiname „Weihnachtsbazar_Auslagen_Druck.pdf“.
4. Kurz berichten, was fertig ist und was ich noch prüfen sollte.
