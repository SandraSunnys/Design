# Basar-Kasse

Kassen-App für den Stand: Produkte antippen, die Kasse rechnet Summe, Rabatte und Rückgeld und zählt das Lager mit.

- Live: https://claude.ai/artifact/AaoUJudXyBJbs6gpLG5Xah (braucht Internet und Anmeldung bei claude.ai)
- Quelle: `kasse.html`, Sortiment und Preise: `sortiment.json`

## Bereiche

- **Kasse**: Kacheln in den Sortenfarben der Auslagen, mit Restbestand („noch 5“). Bon mit +/−, „Sonstiges“ für freie
  Beträge (Spende, Tüte), Rabatt-Schnellwahl oder eigener Rabatt in % oder €, Bar oder Karte/PayPal, Rückgeld mit Stückelung.
- **Verkäufe**: Umsatz pro Tag (bar/Karte getrennt), Stück pro Produkt, gewährte Rabatte, Kassensturz
  (Wechselgeld + Bareinnahmen), Storno einzelner Verkäufe, Export als CSV für Excel.
- **Lager**: Bestand je Sorte eintragen; jeder Verkauf zieht ab, ein Storno bucht zurück. Übersicht „wird knapp“ und
  „leer“; leere Sorten erscheinen an der Kasse grau. Nachzählen = neue Zahl eintragen.
- **Notizen**: Zettel für alles, was ausgeht oder fehlt, mit Uhrzeit und Abhaken. Sorten ohne Lagerzahl lassen sich
  dort von Hand als „ausverkauft“ markieren.
- **Preise & Rabatte**: Produkte und Preise, Rabatt-Knöpfe, Wechselgeld. Mengenrabatte gibt es nicht.

## Offline-Version

Für einen Stand ohne Internet: `offline/` (Anleitung in `offline/LIESMICH.md`). Gleiche Kasse, speichert aber nur auf
dem Kassengerät. Wird mit `python3 offline/bauen.py` aus `kasse.html` erzeugt.
