# Weihnachtsbazar Auslagen

A4-Schilder für Pralinen und Kräuter – lesbar aus der Ferne. Jedes Schild beantwortet die drei Fragen, die am Stand immer gestellt werden: **Was ist das? Was ist drin (bzw. wofür nimmt man es)? Was kostet es?** Warm und weihnachtlich im Ton, aber klar und ehrlich bei Zutaten und Allergenen.

## Aufbau eines Schildes

Jedes A4-Schild (Hochformat, 210 × 297 mm) folgt derselben Reihenfolge von oben nach unten:

1. **Kopfband** (56 px) in der Leitfarbe – `kakao` mit Punkten für Pralinen, `tanne` mit Blättern für Kräuter. So erkennt man die Kategorie schon aus mehreren Metern.
2. **Dachzeile** (`dachzeile`) – „Handgemachte Pralinen“ bzw. „Aus dem Kräutergarten“.
3. **Name** (`schild-titel`, 76 px) – eine Zeile. Bei Kräutern darunter der botanische Name (`schild-latein`).
4. **Ein, zwei Sätze Geschmack** (`schild-lead`) – wie schmeckt es, wie duftet es?
5. **Kästen** auf `kakao-hell` bzw. `tanne-hell`:
   - Pralinen: *Zutaten* und *Allergene & Hinweise*
   - Kräuter: *In der Küche*, *Als Tee* (oder *Im Haushalt*), *Unser Tipp*
6. **Preis** (`schild-preis`, 88 px, `cranberry`) unten links, Preisstaffel rechts.
7. **Fußzeile** (`klein`) – Haltbarkeit, Lagerung, Pflege, Herkunft.

## Inhalt & Ton

- **Sprache:** freundlich, kurz, Sie-Form („Fragen Sie uns gern …“). Keine Ausrufezeichen-Flut, höchstens eines pro Schild.
- **Namen:** so, wie man sie am Stand sagt: „Marzipan-Orange“, „Lebkuchen-Trüffel“, „Rosmarin“.
- **Geschmackssatz:** konkret statt blumig. *„Saftiges Marzipan mit kandierter Orangenschale“*, nicht *„ein Gedicht aus Weihnachtsträumen“*.
- **Preise** immer mit Komma und Leerzeichen vor dem Euro: `1,20 €`, `12,00 €`.

### Pralinen: Zutaten und Allergene

- Zutaten in **absteigender Menge** aufzählen, zusammengesetzte Zutaten in Klammern: *Zartbitterschokolade (Kakaomasse, Zucker, Kakaobutter, Emulgator: Sojalecithin)*.
- Die **14 Hauptallergene** im Zutatentext **fett** hervorheben – das ist die übliche Pflicht-Hervorhebung – und zusätzlich als Marke im Kasten *Allergene & Hinweise* zeigen.
- Spurenhinweis („Kann Spuren von … enthalten“) als eigene Zeile in `tinte-gedaempft`, die Allergene darin ebenfalls fett.
- **Alkohol** immer als Warn-Marke (`cranberry`) kennzeichnen – wichtig für Kinder, Schwangere und Autofahrer.
- Positive Hinweise (*vegan*, *glutenfrei*) nur, wenn sie sicher stimmen – als gestrichelte Marke in `tanne`.
- Die Allergen-Kürzel A–R entsprechen den in der Gastronomie üblichen Buchstaben und werden auf dem Sortiment-Blatt erklärt.

### Kräuter: Verwendung

- Verwendung **praktisch** beschreiben: Gerichte, Teezubereitung mit Menge und Ziehzeit, ein Tipp zum Mitnehmen.
- **Keine Heilversprechen.** Statt „hilft gegen Erkältung“ schreiben: *„Traditionell als wärmender Wintertee getrunken.“* Das ist ehrlich und rechtlich auf der sicheren Seite.
- Bei Pflanzen im Topf eine **Pflegezeile** in die Fußzeile (Standort, Gießen, Überwintern); bei getrockneten Kräutern die Lagerung („trocken und dunkel“).

## Farben

| Token | Wofür |
| --- | --- |
| `papier` | Grund jedes Schildes |
| `tinte` | aller Fließtext, Allergene fett |
| `tinte-gedaempft` | lateinische Namen, Einheiten, Kleingedrucktes |
| `kakao` / `kakao-hell` | Leitfarbe und Kastenfläche **Pralinen** |
| `tanne` / `tanne-hell` | Leitfarbe und Kastenfläche **Kräuter** |
| `cranberry` | Preise, Warnhinweise, Dachzeile der Pralinen |
| `gold` / `gold-hell` | nur Zierde: Linien, Punkte, Blätter – **nie Text** |

Alle Textfarben erreichen mindestens 4,5 : 1 Kontrast auf ihrem Grund (die meisten über 7 : 1), damit die Schilder auch im Halbdunkel einer Turnhalle oder unter Lichterketten lesbar bleiben.

## Schrift

- **Fraunces** (`--font-display`) – eine warme, leicht verspielte Serifenschrift für Namen, Geschmackssatz und Preise.
- **Source Sans 3** (`--font-sans`) – sachlich und sehr gut lesbar für Zutaten, Verwendung und Kleingedrucktes.

Beide sind frei bei Google Fonts erhältlich. Mindestgröße für Text, der am Stand gelesen werden soll: 21 px (`text`). Nur die Fußzeile ist kleiner.

## Formen & Muster

- **Punkte = Pralinen, Blätter = Kräuter.** Diese zwei Formen tragen das Kopfband und das Cover. Sonst gibt es keine Bilder oder Icons – die Schilder bleiben ruhig, die Ware ist der Star.
- Kästen mit `radius-md`, Marken mit `radius-rund`. Goldene Haarlinie (2 px, `gold`) trennt Kopf, Inhalt und Preis.
- Keine Schatten, keine Verläufe – das druckt sich auf jedem Drucker sauber.

## Drucken & Aufstellen

- **A4 Hochformat, Skalierung 100 % („Tatsächliche Größe“)**, Ränder „Keine“; im Browser „Hintergrundgrafiken drucken“ einschalten, sonst fehlen Kopfband und Kästen.
- Der Seitenrand (`space-6`, ≈ 15 mm) ist so bemessen, dass auch Drucker ohne Randlosdruck alles erfassen.
- Ein etwas dickeres Papier (120–160 g/m²) oder eine Klarsichthülle schützt vor Schokoladenfingern; in einem A4-Acryl-Aufsteller wirkt es am edelsten.
- **Sortiment-Blatt** gut sichtbar an die Rückwand oder den Kassenplatz, die Einzelschilder direkt vor die Ware.

## Komponenten

- **PralinenSchild** – ein A4-Schild pro Pralinensorte.
- **KraeuterSchild** – ein A4-Schild pro Kraut.
- **Sortiment** – das Übersichtsblatt mit allen Preisen und der Allergen-Legende.
- **AllergenMarken** – die 14 Hauptallergene plus Warn- und Frei-Hinweis als Bausteine.

Die Beispielinhalte (Marzipan-Orange, Rosmarin, Preise) sind Platzhalter und werden durch eure echten Sorten, Rezepturen und Preise ersetzt.
