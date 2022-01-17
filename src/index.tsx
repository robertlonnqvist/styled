import "tailwindcss/tailwind.css";
import "jetbrains-mono";

import { StrictMode, Suspense } from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import { routes } from "./components/routes";

render(
  <StrictMode>
    <HashRouter>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Routes>
          {routes.map(({ component: Component, to }) => (
            <Route key={to} path={to} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </HashRouter>
  </StrictMode>,
  document.getElementById("root")
);
