self.addEventListener("install", (event) => {
    console.log("New service worker installed");
});

self.addEventListener("activate", (event) => {
    console.log("Service worker is now activated");
});