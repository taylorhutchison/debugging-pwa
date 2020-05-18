/**
 * Activate the waiting service worker and refresh the page
 */
// export default {
//   onUpdate: (registration) => {
//     const waitingServiceWorker = registration.waiting;
//     if (waitingServiceWorker) {
//       waitingServiceWorker.addEventListener("statechange", (event) => {
//         if (event.target.state === "activated") {
//           window.location.reload();
//         }
//       });
//     }
//     waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
//   },
// };

/**
 * Activate the waiting service worker and inform user to refresh the page
 */
export default {
  onUpdate: (registration) => {
    const waitingServiceWorker = registration.waiting;
    if (waitingServiceWorker) {
      waitingServiceWorker.addEventListener("statechange", (event) => {
        if (event.target.state === "activated") {
          alert("App is updated! Refresh to check new features");
        }
      });
    }
    waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
  },
};

