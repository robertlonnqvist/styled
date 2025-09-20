import { JSX, MouseEvent, useContext } from "react";
import { Route, RouteContext, routes } from "./routes";

const hrefs = [
  {
    label: "Code",
    href: "https://github.com/robertlonnqvist",
  },
  {
    label: "Contact",
    href: "https://www.linkedin.com/in/robertlonnqvist",
  },
] as const;

const Nav = ({ title }: { title: string }): JSX.Element => {
  const [, setRoute] = useContext(RouteContext);

  const onClick = (e: MouseEvent, r: Route) => {
    e.preventDefault();
    setRoute(r);
  };

  return (
    <header className="flex justify-between flex-col md:flex-row items-center mb-6 border-b border-gray-400">
      <a href="/" className="font-extrabold text-2xl hover:text-white mb-3">
        <span className="text-pink-600 ">&gt;&gt;</span> Robert Lönnqvist
      </a>
      <nav
        className="flex justify-around space-x-2 items-center mb-3"
        role="navigation"
        aria-label="Main navigation"
      >
        {routes.map((r, i) => (
          <a
            key={i}
            href={r.href}
            onClick={(e) => onClick(e, r)}
            className={`font-bold block px-4 py-2 hover:text-white hover:bg-gray-500 rounded-lg ${
              title === r.label ? "bg-gray-500 text-white" : ""
            }`}
            aria-current={title === r.label ? "page" : undefined}
          >
            {r.label}
          </a>
        ))}
        {hrefs.map(({ label, href }, i) => (
          <a
            key={i}
            href={href}
            className="font-bold block px-4 py-2 hover:text-white hover:bg-gray-500 rounded-lg"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
