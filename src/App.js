import React from "react";
import "./App.css";
import { Stocks } from "./Stocks";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="header" />
        <Stocks />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
