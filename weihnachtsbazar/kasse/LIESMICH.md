# Basar-Kasse

Kassen-App für den Stand: Produkte antippen, die Kasse rechnet Summe, Mengenangebote, Rabatte und Rückgeld.
Alle Verkäufe werden gemeinsam gespeichert, sodass jedes Helfer-Handy dieselben Zahlen sieht.

- Live: https://claude.ai/artifact/AaoUJudXyBJbs6gpLG5Xah (Teilen-Menü: Helfer als „Contributor“ einladen, damit sie kassieren dürfen)
- Quelle: `kasse.html`

## Bereiche

- **Kasse**: Kacheln in den Sortenfarben der Auslagen. Bon mit +/−, „Sonstiges“ für freie Beträge (Spende, Tüte),
  Rabatt-Schnellwahl oder eigener Rabatt in % oder €, Bar oder Karte/PayPal, Rückgeld mit Stückelung.
- **Verkäufe**: Umsatz pro Tag (bar/Karte getrennt), Stück pro Produkt, gewährte Rabatte, Kassensturz
  (Wechselgeld + Bareinnahmen), Storno einzelner Verkäufe, Export als CSV für Excel.
- **Notizen**: Zettel für alles, was ausgeht oder fehlt, mit Uhrzeit und Abhaken. Darunter Sorten als „ausverkauft“
  markieren; an der Kasse erscheinen sie dann grau.
- **Preise & Rabatte**: Produkte und Preise, Rabatt-Knöpfe, Mengenangebote („3 Pralinen für 20 €“, gilt auch für
  gemischte Sorten einer Gruppe), Wechselgeld.

## Reihenfolge der Rechnung

1. Zwischensumme aller Artikel
2. Mengenangebote je Gruppe (die teuersten Artikel zuerst, falls Preise in einer Gruppe verschieden sind)
3. Rabatt auf den restlichen Betrag (Prozent auf den Cent gerundet, Euro-Betrag höchstens bis 0 €)

## Offline-Version

Für einen Stand ohne Internet: `offline/` (Anleitung in `offline/LIESMICH.md`). Gleiche Kasse, speichert aber nur auf
dem Kassengerät. Wird mit `python3 offline/bauen.py` aus `kasse.html` erzeugt.
