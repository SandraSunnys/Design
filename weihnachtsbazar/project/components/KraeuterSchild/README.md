# KraeuterSchild

Ein A4-Schild pro Kraut mit Name, botanischem Namen, Geschmack, Verwendung, Tipp und Preis.

## Aufbau

`article.bz-a4.bz-kraeuter` enthält in dieser Reihenfolge:

1. `.bz-band.bz-band--kraeuter` – Kopfband in `tanne` mit 23 `<i>`-Blättern.
2. `.bz-dachzeile` – „Aus dem Kräutergarten“.
3. `h1.bz-titel` – Name des Krauts; `.bz-latein` – botanischer Name.
4. `.bz-lead` – Geschmack und Duft in einem Satz.
5. `hr.bz-regel`.
6. `.bz-grid` mit drei `.bz-kasten`: **In der Küche** (`.bz-liste`), **Als Tee** oder **Im Haushalt** (`.bz-text`), **Unser Tipp** (`.bz-breit`, volle Breite).
7. `.bz-preis` – Preis für Topf oder Tütchen, Staffel rechts.
8. `.bz-fuss` – Pflege (Topf) oder Lagerung (getrocknet), Herkunft.

## Was ihr liefert

- Name, botanischer Name, wie es schmeckt.
- 3–5 Gerichte, zu denen es passt.
- Teezubereitung (Menge, Wassermenge, Ziehzeit) oder eine andere Verwendung (Kräutersäckchen, Badezusatz, Duftkissen).
- Ein Tipp zum Nachmachen – gern als Geschenkidee.
- Preis und Form (Topf, frisch gebündelt, getrocknet).

## Regeln

- **Keine Heilversprechen:** „traditionell verwendet als …“ statt „hilft gegen …“.
- Höchstens 5 Punkte pro Liste, damit das Schild aus der Ferne ruhig wirkt.
- Wird der Tee-Kasten nicht gebraucht, den Küchen-Kasten mit `.bz-breit` über die volle Breite laufen lassen.
