# PralinenSchild

Ein A4-Schild pro Pralinensorte mit Name, Geschmack, Zutaten, Allergenen und Preis.

## Aufbau

`article.bz-a4.bz-pralinen` enthält in dieser Reihenfolge:

1. `.bz-band` – Kopfband in `kakao` mit 26 `<i>`-Punkten.
2. `.bz-dachzeile` – „Handgemachte Pralinen“.
3. `h1.bz-titel` – Sortenname, eine Zeile (bis ca. 16 Zeichen bei 76 px).
4. `.bz-lead` – ein, zwei Sätze Geschmack.
5. `hr.bz-regel` – goldene Haarlinie.
6. `.bz-kasten` **Zutaten** – `.bz-text`, Allergene in `<b>`.
7. `.bz-kasten` **Allergene & Hinweise** – `.bz-chips` mit `.bz-chip` (Kürzel in `<b>`), `.bz-chip--warn` für Alkohol, `.bz-chip--frei` für vegan/glutenfrei; darunter `.bz-spuren`.
8. `.bz-preis` – `.bz-preis-gross` (mit `<small>` für die Einheit) und `.bz-staffel`.
9. `.bz-fuss` – Lagerung, Mindesthaltbarkeit, Hersteller.

## Was ihr liefert

- Sortenname und einen ehrlichen Geschmackssatz.
- Die **vollständige Zutatenliste** aus dem Rezept, inklusive der Zutaten in gekaufter Schokolade, Marzipan, Likör usw. (steht auf deren Verpackung).
- Welche der 14 Hauptallergene enthalten sind und wovon Spuren möglich sind.
- Preis pro Stück und ggf. Staffelpreise.

## Regeln

- Allergene **im Zutatentext fett** *und* als Marke – nie nur eines davon.
- Alkohol immer als Warn-Marke, auch bei kleinen Mengen.
- Der Name bleibt einzeilig; ist er länger, die Schriftgröße nicht verkleinern, sondern den Namen kürzen (z. B. „Lebkuchen-Trüffel“ statt „Trüffel mit Lebkuchengewürz“).
