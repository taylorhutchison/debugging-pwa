self.addEventListener("install", (event) => {
  console.log("New service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});

/**
 * This is a working version with caching strategy 01
 */
// self.addEventListener("fetch", (event) => {
//   console.log('Service Worker intercepting fetch calls');
//   const cacheName = "version1";
//   if (navigator.onLine) {
//     event.respondWith(
//       fetch(event.request).then((networkResponse) => {
//         return caches.open(cacheName).then((cache) => {
//           console.log("Fetching from Network");
//           cache.put(event.request, networkResponse.clone());
//           return networkResponse;
//         });
//       })
//     );
//   } else {
//     event.respondWith(caches.match(event.request).then((response) => response));
//   }
// });

self.addEventListener("fetch", (event) => {
  const cacheName = "version1";
  console.log("Service Worker intercepting fetch calls");
  if (!navigator.onLine)
    event.respondWith(caches.match(event.request).then((response) => response));

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      return caches.open(cacheName).then((cache) => {
        console.log("cache created");
        return fetch(event.request).then((networkResponse) => {
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      });
    })
  );
});

function refresh(response) {
  return self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      var message = {
        type: "refresh",
        url: response,
        eTag: response.headers.get("ETag"),
      };
      client.postMessage(JSON.stringify(message));
    });
  });
}
