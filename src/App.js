import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Home {...props} />} />
        <Redirect to="/" />
      </Switch>
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
