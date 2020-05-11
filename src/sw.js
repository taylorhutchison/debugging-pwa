self.addEventListener("install", (event) => {
  console.log("New service worker installed");
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker is now activated");
});
