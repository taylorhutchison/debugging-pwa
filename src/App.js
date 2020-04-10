import React from "react";
import "./App.css";
import { Stocks } from "./Stocks";
import { About } from "./About";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
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

export default App;
