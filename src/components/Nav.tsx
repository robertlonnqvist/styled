import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    label: "About",
    to: "/",
  },
  {
    label: "CV",
    to: "/cv",
  },
];

const hrefs = [
  {
    label: "Code",
    href: "https://github.com/robertlonnqvist",
  },
  {
    label: "Contact",
    href: "https://www.linkedin.com/in/robertlonnqvist",
  },
];

const Nav = ({ title }: { title: string }): JSX.Element => {
  return (
    <header className="flex justify-between flex-col md:flex-row items-center">
      <a href="/" className="font-extrabold text-2xl hover:text-white mb-2">
        <span className="text-pink-600 ">&gt;&gt;</span> Robert Lönnqvist
      </a>
      <nav className="flex justify-around space-x-2 items-center mb-2">
        {links.map(({ label, to }, i) => (
          <Link
            key={i}
            to={to}
            className={`font-medium block px-4 py-2 hover:text-white hover:bg-gray-500 rounded-lg ${
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
            className="font-medium block px-4 py-2 hover:text-white hover:bg-gray-500 rounded-lg"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Nav;
