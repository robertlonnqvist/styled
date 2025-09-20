import {
  ExoticComponent,
  lazy,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

const About = lazy(() => import("./About"));
const Resume = lazy(() => import("./Resume"));

export type Route = {
  label: string;
  href: string;
  component: ExoticComponent;
};

export const routes: Route[] = [
  {
    label: "About",
    href: "/",
    component: About,
  },
  {
    label: "Resume",
    href: "/resume",
    component: Resume,
  },
] as const;

export const RouteContext = createContext<
  [Route | null, Dispatch<SetStateAction<Route>>]
>([null, () => {}]);
