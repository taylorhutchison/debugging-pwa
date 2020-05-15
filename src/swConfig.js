export default {
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    if (waitingServiceWorker) {
      waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
      waitingServiceWorker.addEventListener("statechange", (event) => {
        if (event.target.state === "activated") {
          alert("App is updated! Refresh to check new features");
        }
      });
    }
  },
};