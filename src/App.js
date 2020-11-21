import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import logo from "./logo.svg";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css?v1.1.0";
import "./App.css";

import Index from "views/Index.js";
import Landing from "views/examples/Landing";
import Login from "views/examples/Login";
import Profile from "views/examples/Profile";
import Register from "views/examples/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          exact
          render={(props) => <Landing {...props} />}
        />
        <Route
          path="/login-page"
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/profile-page"
          exact
          render={(props) => <Profile {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={(props) => <Register {...props} />}
        />
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
