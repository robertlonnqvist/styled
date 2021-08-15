import { lazy } from "react";

const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));

export const routes = [
  {
    label: "About",
    to: "/",
    Component: About,
  },
  {
    label: "Resume",
    to: "/resume",
    Component: Resume,
  },
] as const;
