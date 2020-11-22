import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import logo from "./logo.svg";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/argon-design-system-react.css?v1.1.0";
import "./App.css";

import Index from "views/Index";
import Landing from "views/examples/Landing";
import Login from "views/examples/Login";
import Profile from "views/examples/Profile";
import Profile2 from "views/examples/Profile2";
import Register from "views/examples/Register";
import Bikes from "views/examples/Bikes";
import Resume1 from "views/examples/Resume1";
import Resume2 from "views/examples/Resume2";
import DemoComponents from "views/examples/DemoComponents";

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
          path="/profile-2-page"
          exact
          render={(props) => <Profile2 {...props} />}
        />
        <Route
          path="/register-page"
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path="/bikes-page"
          exact
          render={(props) => <Bikes {...props} />}
        />
        <Route
          path="/resume-1-page"
          exact
          render={(props) => <Resume1 {...props} />}
        />
        <Route
          path="/resume-2-page"
          exact
          render={(props) => <Resume2 {...props} />}
        />
        <Route
          path="/demo-components-page"
          exact
          render={(props) => <DemoComponents {...props} />}
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
