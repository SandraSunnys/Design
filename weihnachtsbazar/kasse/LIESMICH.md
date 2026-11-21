# Basar-Kasse

Kassen-App für den Stand: Produkte antippen, die Kasse rechnet Summe, Rabatte und Rückgeld und zählt das Lager mit.

- Live: https://claude.ai/artifact/AaoUJudXyBJbs6gpLG5Xah (braucht Internet und Anmeldung bei claude.ai)
- Quelle: `kasse.html`, Sortiment und Preise: `sortiment.json`

## Bereiche

- **Kasse**: Kacheln in den Sortenfarben der Auslagen, mit Restbestand („noch 5“). Bon mit +/−, „Sonstiges“ für freie
  Beträge (Spende, Tüte), Rabatt-Schnellwahl oder eigener Rabatt in % oder €, Bar (mit Rückgeld und Stückelung) oder PayPal: der hinterlegte
  PayPal-QR-Code wird mit dem Betrag groß angezeigt.
- **Verkäufe**: Umsatz pro Tag (bar/PayPal/vorab getrennt), Stück pro Produkt, gewährte Rabatte, Kassensturz
  (Wechselgeld + Bareinnahmen) mit Zählhilfe für Scheine und Münzen, Storno einzelner Verkäufe, Export als CSV.
  Darunter der **Rückblick**: Bestseller, Umsatz je Stunde, wann was ausverkauft war. **Bericht speichern** erzeugt
  eine HTML-Datei mit allem (inkl. Zählung, Vorbestellungen, Notizen) zum Aufheben fürs nächste Jahr.
- **Vorbestellungen**: Name, Abholung, Telefon, Sorten, Sonderposten mit eigenem Preis und Sonderwünsche vormerken (der
  Sonderwunsch erscheint bei der Abholung oben im Bon), optional „schon bezahlt“. Die Ware gilt im Lager als
  reserviert. Bei der Abholung „Abholen & kassieren“ (Bestellung landet im Bon, Extras einfach dazutippen). Wenn schon
  bezahlt: „Abgeholt“ oder „Abholen & dazukaufen“ (Vorbestelltes steht als „bezahlt“ im Bon, kassiert werden nur die
  Extras). Der vorbezahlte Teil wird als „vorab bezahlt“ gebucht und zählt nicht zum Kassensturz.
- **Lager**: Bestand je Sorte eintragen; jeder Verkauf zieht ab, ein Storno bucht zurück. Übersicht „wird knapp“ und
  „leer“; leere Sorten erscheinen an der Kasse grau. Nachzählen = neue Zahl eintragen.
- **Notizen**: Zettel für alles, was ausgeht oder fehlt, mit Uhrzeit und Abhaken. Sorten ohne Lagerzahl lassen sich
  dort von Hand als „ausverkauft“ markieren.
- **Preise & Rabatte**: Produkte und Preise, Rabatt-Knöpfe, PayPal-QR-Code (Bildschirmfoto aus der PayPal-App), Wechselgeld. Mengenrabatte gibt es nicht.

## Offline-Version

Für einen Stand ohne Internet: `offline/` (Anleitung in `offline/LIESMICH.md`). Gleiche Kasse, speichert aber nur auf
dem Kassengerät. Wird mit `python3 offline/bauen.py` aus `kasse.html` erzeugt.
