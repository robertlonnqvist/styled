import "tailwindcss/tailwind.css";
import "jetbrains-mono";

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import { routes } from "./components/routes";

const el = document.getElementById("root");
if (!el) {
  throw Error("Container must not be null");
}
const root = createRoot(el);
root.render(
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
  </StrictMode>
);
