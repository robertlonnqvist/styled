import "tailwindcss/tailwind.css";

import { StrictMode, Suspense } from "react";
import { render } from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";

import { routes } from "./components/routes";

render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Switch>
          {routes.map(({ Component, to }) => (
            <Route key={to} exact path={to}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Suspense>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
