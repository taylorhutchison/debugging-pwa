import { Button } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import { Stocks } from "./Stocks";

function App() {
  const onClick = () => {
    console.log("User clicked INSTALL button");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    promptEvent.prompt();
    promptEvent.userChoice.then((choice) => {
      console.log("User selected -> ", choice);
      window.deferredPrompt = null;
      console.log("done");
      document.getElementById("installContainer").style.display = "none";
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
            size="small"
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
  console.log("beforeinstallprompt fired -> ", event);
  window.deferredPrompt = event;
  document.getElementById("installContainer").classList.toggle("hidden", false);
});

export default App;
