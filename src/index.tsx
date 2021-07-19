import "tailwindcss/tailwind.css";

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

const About = React.lazy(() => import("./components/About"));
const CV = React.lazy(() => import("./components/CV"));

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/cv">
            <CV />
          </Route>
          <Route path="*">
            <About />
          </Route>
        </Switch>
      </React.Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
