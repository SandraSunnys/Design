# Basar-Kasse offline

Dieselbe Kasse wie online, aber ohne Internet: Preise und Verkäufe werden im Browser des Kassengeräts gespeichert.
Schriften und Symbol stecken in `index.html`, es wird nichts nachgeladen.

## Auf das Gerät bringen

**Laptop:** `index.html` auf den Laptop kopieren und per Doppelklick im Browser öffnen (Chrome, Edge, Firefox oder Safari).
Immer dieselbe Datei im selben Browser öffnen, sonst sind die Verkäufe nicht zu sehen.

**iPad, iPhone, Android:** Auf Tablets und Handys lässt sich eine einzelne HTML-Datei nicht zuverlässig öffnen. Deshalb
den ganzen Ordner `offline/` einmal ins Internet stellen, als App auf den Startbildschirm legen, dann läuft sie ohne Netz:

1. Am Computer https://app.netlify.com/drop öffnen, kostenloses Konto anlegen und den Ordner `offline` (oder den Inhalt
   von `Basar-Kasse-offline.zip`) in das Feld ziehen. Netlify zeigt eine Adresse wie `https://….netlify.app`.
2. Diese Adresse auf dem Kassengerät öffnen (iPad/iPhone: in Safari; Android: in Chrome).
3. Als App ablegen: iPad/iPhone über **Teilen → Zum Home-Bildschirm**, Android über **⋮ → Zum Startbildschirm hinzufügen**
   bzw. **App installieren**.
4. Die App einmal vom Startbildschirm aus öffnen, solange noch Internet da ist. Danach läuft sie offline.
5. Test: Flugmodus an, App öffnen, Probeverkauf machen, unter „Preise & Rabatte → Alle Verkäufe löschen“ wieder entfernen.

Wichtig: Immer die App vom Startbildschirm benutzen, nicht den Safari-Tab. Beide speichern getrennt.

## Daten sicher behalten

Alles liegt im Speicher der Kassen-App auf dem iPad. Das übersteht Ausschalten, leeren Akku, Neustart und Schließen der App.
Verloren gehen die Daten nur, wenn

- das Symbol der Kasse vom Home-Bildschirm **gelöscht** wird (iPadOS löscht dabei die Daten mit),
- in den Einstellungen unter Safari **„Verlauf und Websitedaten löschen“** gewählt wird,
- das iPad verloren geht oder kaputt ist,
- eine neue Version über eine **neue Netlify-Adresse** geöffnet wird (dann ist die alte App mit den Daten noch da, aber die
  neue sieht sie nicht).

Deshalb:

- Tagsüber zwischendurch **sichern**: Die Kasse zeigt oben „gesichert 14:05“ und meldet „Sicherung empfohlen“ nach
  20 Verkäufen oder 3 Stunden. „Jetzt sichern“ → Teilen-Menü → **In Dateien sichern** (geht auch offline; liegt die Datei in
  iCloud Drive, lädt das iPad sie abends hoch, sobald es online ist).
- Abends, wenn wieder Internet da ist: **Sicherung** und **Bericht** speichern (iCloud Drive oder Mail an sich selbst).
- **Updates immer in dieselbe Netlify-Seite** laden: in Netlify die bestehende Seite öffnen → „Deploys“ → neue Dateien in
  das Feld ziehen. Nicht über app.netlify.com/drop eine neue Seite anlegen. Vor einem Update eine Sicherung machen.

## Vor dem Basar

- Unter **Preise & Rabatte** die echten Preise und das Wechselgeld eintragen und **Speichern**.
- Abends unter **Preise & Rabatte → Sicherung speichern** eine Sicherung anlegen. Die Daten liegen nur auf dem Gerät;
  wird der Browserspeicher gelöscht, sind sie sonst weg.

## Ändern

Die Offline-Version wird aus `../kasse.html` erzeugt: dort ändern, dann `python3 bauen.py` ausführen.
Nach einer Änderung in `sw.js` die `VERSION` erhöhen, damit installierte Geräte die neue Fassung laden.
