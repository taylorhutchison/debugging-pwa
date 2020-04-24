import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import { Stocks } from "./Stocks";

function App() {
  const onClick = () => {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    promptEvent.prompt();
    promptEvent.userChoice.then((result) => {
      console.log("👍", "userChoice", result);
      // Reset the deferred prompt variable, since
      // prompt() can only be called once.
      window.deferredPrompt = null;
      // Hide the install button.
      document
        .getElementById("installContainer")
        .classList.toggle("hidden", true);
    });
  };

  return (
    <Router>
      <div className="App">
        <div id="installContainer" className="hidden">
          <Button
            onClick={onClick}
            variant="outlined"
            color="primary"
            size="medium"
          >
            INSTALL
          </Button>
        </div>
        <header className="header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Stocks />
        </Route>
      </Switch>
    </Router>
  );
}

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("👍", "beforeinstallprompt", event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  document.getElementById("installContainer").classList.toggle("hidden", false);
});

export default App;
