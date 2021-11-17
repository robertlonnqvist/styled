import { lazy } from "react";

const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));

export const routes = [
  {
    label: "About",
    to: "/",
    component: About,
  },
  {
    label: "Resume",
    to: "/resume",
    component: Resume,
  },
] as const;
