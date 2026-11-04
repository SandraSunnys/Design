# Sortiment

Das Übersichtsblatt für den Stand: alle Pralinen und Kräuter mit Preis und Allergen-Kürzeln auf einer A4-Seite.

## Aufbau

- `.bz-band`, `.bz-dachzeile` („Weihnachtsbazar“), `h1.bz-titel` („Unser Sortiment“), `.bz-lead`.
- `.bz-spalten` mit zwei Abschnitten: `h2.bz-abschnitt` (Pralinen, `kakao`) und `h2.bz-abschnitt--kraeuter` (Kräuter, `tanne`).
- Jede Zeile in `ul.bz-zeilen`: `.bz-name` (Allergen-Kürzel in `<sup>`), `.bz-punkte` (goldene Punktlinie), `.bz-betrag` (`cranberry`).
- `.bz-legende` am Seitenende: die 14 Allergen-Kürzel A–R.

## Regeln

- Bis ca. 9 Zeilen pro Spalte passen bequem; bei mehr Sorten den Einleitungssatz streichen.
- Die Kürzel müssen mit den Marken auf den Einzelschildern übereinstimmen.
- Bundle-Angebote (Geschenkbeutel, „3 nach Wahl“) als letzte Zeile der jeweiligen Spalte.
