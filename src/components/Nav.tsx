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

const Nav = ({
  title,
  isLight,
  onToggleTheme,
}: {
  title: string;
  isLight: boolean;
  onToggleTheme: () => void;
}): JSX.Element => {
  const [, setRoute] = useContext(RouteContext);

  const onClick = (e: MouseEvent, r: Route) => {
    e.preventDefault();
    setRoute(r);
  };

  return (
    <header className="mx-auto flex w-[calc(100%-1.875rem)] max-w-[26.25rem] min-h-[3.875rem] flex-col items-start justify-between gap-[1.0625rem] border-b border-[rgb(149_174_205_/_14%)] pb-[0.9375rem] pt-5 min-[481px]:w-[calc(100%-2.25rem)] min-[481px]:max-w-[38.75rem] md:w-[calc(100%-3.5rem)] md:max-w-[72.5rem] md:flex-row md:items-center md:gap-6 md:pb-5 md:pt-[1.875rem]">
      <a
        href="#/"
        onClick={(e) => onClick(e, routes[0])}
        className="inline-flex items-center whitespace-nowrap text-[0.875rem] font-bold tracking-[-0.06em] text-[var(--text-primary)] min-[481px]:text-[0.9375rem]"
        aria-label="Robert Lönnqvist, home"
      >
        <span className="mr-2.5 text-[1.375rem] text-blue" aria-hidden="true">
          {"<"}
        </span>
        Robert Lönnqvist
        <span className="text-[1.375rem] text-blue" aria-hidden="true">
          .
        </span>
      </a>
      <nav
        className="flex w-full flex-wrap items-center gap-0.5 md:w-auto md:gap-[0.3125rem]"
        aria-label="Main navigation"
      >
        {routes.map((r, i) => (
          <a
            key={i}
            href={`#${r.href}`}
            onClick={(e) => onClick(e, r)}
            className={`rounded-[0.4375rem] border border-transparent px-2 py-2 text-[0.625rem] text-[var(--text-nav)] transition-[color,background-color,border-color] duration-[160ms] hover:border-[rgb(149_174_205_/_30%)] hover:text-[var(--text-primary)] min-[481px]:px-2.5 min-[481px]:text-xs md:px-[0.8125rem] md:py-[0.5625rem] ${title === r.label ? "nav-active bg-blue text-bg" : ""}`}
            aria-current={title === r.label ? "page" : undefined}
          >
            {r.label}
          </a>
        ))}
        {hrefs.map(({ label, href }, i) => (
          <a
            key={i}
            href={href}
            className="rounded-[0.4375rem] border border-transparent px-2 py-2 text-[0.625rem] text-[var(--text-external)] transition-[color,background-color,border-color] duration-[160ms] hover:border-[rgb(149_174_205_/_30%)] hover:text-[var(--text-primary)] min-[481px]:px-2.5 min-[481px]:text-xs md:px-[0.8125rem] md:py-[0.5625rem]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          className="ml-auto rounded-[0.4375rem] border border-[rgb(149_174_205_/_30%)] px-2 py-2 text-[0.625rem] font-semibold text-[var(--text-primary)] transition-colors hover:bg-[rgb(149_174_205_/_12%)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue min-[481px]:text-xs md:ml-1 md:px-3 md:py-[0.5625rem]"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
          aria-pressed={isLight}
        >
          {isLight ? "☾ Dark" : "☀ Light"}
        </button>
      </nav>
    </header>
  );
};

export default Nav;
