import { JSX } from "react";
import { Link } from "react-router-dom";
import { routes } from "./routes";

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
  return (
    <header className="flex justify-between flex-col md:flex-row items-center mb-6 border-b border-gray-400">
      <a href="/" className="font-extrabold text-2xl hover:text-white mb-3">
        <span className="text-pink-600 ">&gt;&gt;</span> Robert Lönnqvist
      </a>
      <nav className="flex justify-around space-x-2 items-center mb-3">
        {routes.map(({ label, to }, i) => (
          <Link
            key={i}
            to={to}
            className={`font-bold block px-4 py-2 hover:text-white hover:bg-gray-500 rounded-lg ${
              title === label ? "bg-gray-500 text-white" : ""
            }`}
          >
            {label}
          </Link>
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
