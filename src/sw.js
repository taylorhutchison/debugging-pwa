self.addEventListener("install", (event) => {
  console.log("New service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});

// self.addEventListener("fetch", (event) => {
//   const cacheName = "version1";
//   if (!navigator.onLine)
//     event.respondWith(caches.match(event.request).then((response) => response));

//   event.respondWith(caches.match(event.request).then((response) => response ));
//   event.waitUntil(
//     updateCache(event.request, cacheName)
//       .then((networkResponse) => networkResponse.json())
//       .then((jsonResponse) => refresh(jsonResponse.body))
//   );
// });

// self.addEventListener("fetch", (event) => {
//   const cacheName = "version1";
//   if (!navigator.onLine)
//     event.respondWith(caches.match(event.request).then((response) => response));

//   event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
//   event.waitUntil(
//     updateCache(event.request, cacheName)
//       .then((networkResponse) => networkResponse.json())
//       .then((jsonResponse) => refresh(jsonResponse.body))
//   );
// });

self.addEventListener("fetch", (event) => {
  const cacheName = "version1";
  if (!navigator.onLine)
    event.respondWith(caches.match(event.request).then((response) => response));

  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        updateCache(event.request, cacheName)          
      );
    })
  );

  event.waitUntil(
    updateCache(event.request, cacheName)
      .then((networkResponse) => networkResponse.json())
      .then((jsonResponse) => refresh(jsonResponse.body))
  );
});

function updateCache(request, cacheName) {
  console.log("Updating cache");
  return fetch(request).then((networkResponse) => {
    return caches.open(cacheName).then((cache) => {
      cache.put(request, networkResponse.clone());
      return networkResponse;
    });
  });
}

function refresh(response) {
  return self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      client.postMessage({ msg: "refresh", res: response });
    });
  });
}
