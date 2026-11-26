// Hält die Basar-Kasse ohne Internet bereit. Bei jeder Änderung an index.html VERSION erhöhen.
const VERSION = "basar-kasse-22";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Die Seite selbst: mit Internet immer die neueste Fassung, ohne Internet (oder nach 3 s) die gespeicherte
  if (e.request.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
    e.respondWith(caches.open(VERSION).then((c) => {
      const netz = fetch(e.request, { cache: "no-store" }).then((a) => { if (a.ok) c.put("./index.html", a.clone()); return a; });
      const warten = new Promise((_, nein) => setTimeout(nein, 3000));
      return Promise.race([netz, warten]).catch(() => c.match("./index.html").then((t) => t || netz));
    }));
    return;
  }
  e.respondWith(caches.open(VERSION).then((c) => c.match(e.request, { ignoreSearch: true }).then((treffer) => {
    const netz = fetch(e.request).then((antwort) => { if (antwort.ok) c.put(e.request, antwort.clone()); return antwort; }).catch(() => treffer);
    return treffer || netz;
  })));
});
