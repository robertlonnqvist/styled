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
    <header className="flex justify-between flex-col md:flex-row items-center mb-6 border-b border-comment">
      <a
        href="#/"
        onClick={(e) => onClick(e, routes[0])}
        className="font-extrabold text-2xl hover:text-white mb-3 focus:outline-none focus:ring-2 focus:ring-magenta rounded"
      >
        <span className="text-magenta ">&gt;&gt;</span> Robert Lönnqvist
      </a>
      <nav
        className="flex justify-around space-x-2 items-center mb-3"
        role="navigation"
        aria-label="Main navigation"
      >
        {routes.map((r, i) => (
          <a
            key={i}
            href={`#${r.href}`}
            onClick={(e) => onClick(e, r)}
            className={`font-bold block px-4 py-2 hover:text-bg hover:bg-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue ${
              title === r.label ? "bg-blue text-bg" : ""
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
            className="font-bold block px-4 py-2 hover:text-bg hover:bg-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-blue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
