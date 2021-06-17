import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import ROUTES from "./config/routes";
import Home from "./pages/Home";
import logo from "./logo.svg";

function App() {
  const F = ROUTES.map((item, index) => {
    return (
      // <item.component
      //   key={`${item.name}-${index}`}
      //   data-attr={`${item.name}-${index}`}
      // />

      <Route
        path={`/${item.path}`}
        exact
        render={(props) => (
          <item.component {...props} key={`${item.name}-${index}`} />
        )}
      />
    );
  });
  debugger;
  return (
    <>
      <nav>
        <a className="App-link" href="/" rel="noopener noreferrer">
          HOME
        </a>

        <a className="App-link" href="/movies" rel="noopener noreferrer">
          MOVIES
        </a>
      </nav>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact render={(props) => <Home {...props} />} /> */}
          {/* <Redirect to="/" /> */}
          {/* <Route path="/" exact render={(props) => <Home {...props} />} /> */}
          {F}
        </Switch>
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
    </>
  );
}

export default App;
