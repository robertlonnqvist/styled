import "tailwindcss/tailwind.css";
import "jetbrains-mono";

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.getElementById("root");
if (!el) {
  throw Error("Container must not be null");
}
const root = createRoot(el);
root.render(
  <StrictMode>
    <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
);
