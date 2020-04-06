self.addEventListener("install", (event) => {
  console.log("New service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});

self.addEventListener("fetch", (event) => {
  const cacheName = "version1";
  if (navigator.onLine) {
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        return caches.open(cacheName).then((cache) => {
          console.log("Fetching from Network");
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
    );
  } else {
    event.respondWith(caches.match(event.request).then((response) => response));
  }
});