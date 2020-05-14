self.addEventListener("install", (event) => {
  console.log("New service worker installed");
});

self.addEventListener("activate", (event) => {
  console.log("Service worker is now activated");
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => client.postMessage({ type: "CREATE_DB" }));
  });
});
