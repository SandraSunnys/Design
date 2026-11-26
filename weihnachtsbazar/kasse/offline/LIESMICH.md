# Basar-Kasse offline

Dieselbe Kasse wie online, aber ohne Internet: Preise und Verkäufe werden im Browser des Kassengeräts gespeichert.
Schriften und Symbol stecken in `index.html`, es wird nichts nachgeladen.

## Auf das iPad bringen

**A. Am Computer (einmalig, ca. 10 Minuten)**

1. `Basar-Kasse-offline.zip` entpacken. Im Ordner liegen fünf Dateien: `index.html`, `manifest.webmanifest`, `sw.js`,
   `icon-192.png`, `icon-512.png`.
2. app.netlify.com öffnen, kostenloses Konto anlegen und **anmelden**. Ohne Anmeldung bekommt die Seite ein Passwort und
   wird nach kurzer Zeit gelöscht.
3. Angemeldet app.netlify.com/drop öffnen und den entpackten Ordner in das Feld ziehen. Netlify zeigt eine Adresse wie
   `https://….netlify.app`.
4. Optional jetzt (und nur jetzt) einen leichteren Namen vergeben: Projekt → Projekteinstellungen → Projektname ändern.
   Später nicht mehr ändern, sonst findet das iPad seine Daten nicht.
5. Die Adresse am Computer öffnen: Die Kasse sollte erscheinen.

**B. Am iPad (mit Internet, ca. 5 Minuten)**

1. Die Adresse in **Safari** öffnen (abtippen oder per Mail/AirDrop schicken).
2. Teilen-Symbol (Quadrat mit Pfeil; je nach iPadOS oben rechts oder im Menü „⋯“) → **Zum Home-Bildschirm**.
   Falls „Als Web-App öffnen“ angezeigt wird: eingeschaltet lassen. Name „Kasse“ → **Hinzufügen**.
3. Die Kasse über das neue Symbol (rot mit weißem Stern) öffnen und ein paar Sekunden warten. Oben steht „offline bereit“.
4. Ab jetzt immer nur das Symbol benutzen, nicht den Safari-Tab.

**C. Probelauf**

1. Flugmodus an, Kasse ganz schließen (App-Übersicht, nach oben wischen) und über das Symbol neu öffnen: Sie muss laden.
2. Probeverkauf bar und einen mit PayPal; den QR-Code mit einem Handy scannen.
3. „Preise & Rabatte“ → „Sicherung speichern“ → „In Dateien sichern“ ausprobieren.
4. „Preise & Rabatte“ → „Alle Verkäufe löschen“. Erst danach Lagerbestände und Wechselgeld eintragen.
5. Flugmodus aus.

**Neue Version einspielen:** vorher sichern; in Netlify dieselbe Seite öffnen → „Deploys“ → neuen Ordner in das Feld
ziehen. Danach holt sich die Kasse die neue Fassung von selbst, sobald sie mit Internet geöffnet wird. Sofort geht es
über „Preise & Rabatte“ → **App aktualisieren**. Dort steht auch, von wann die App-Version ist.
(Einmalige Ausnahme: Läuft auf dem iPad noch eine Fassung ohne diesen Knopf, die Kasse mit Internet öffnen, ganz
schließen und noch einmal öffnen.)

Auf einem Laptop geht es auch ohne Netlify: `index.html` doppelklicken, immer dieselbe Datei im selben Browser öffnen.

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
