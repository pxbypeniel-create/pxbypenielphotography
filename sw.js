self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("px-peniel-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        // Add other core asset paths here if needed
      ]);
    }),
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    }),
  );
});
