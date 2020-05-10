self.addEventListener("install", (event) => {
  console.log("V2 installing")
  console.log("New service worker installed");
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker is now activated");
  self.clients.matchAll().then(function (clients) {
    clients.forEach(function (client) {
      client.postMessage("createDB");
    });
  });
});