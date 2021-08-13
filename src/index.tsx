import "tailwindcss/tailwind.css";

import { StrictMode, Suspense, lazy } from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

const About = lazy(() => import("./components/About"));
const CV = lazy(() => import("./components/CV"));

render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Switch>
          <Route exact path="/cv">
            <CV />
          </Route>
          <Route path="*">
            <About />
          </Route>
        </Switch>
      </Suspense>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
