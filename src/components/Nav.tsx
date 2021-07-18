import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  active: "about" | "cv";
}

const Nav = ({ active }: NavProps): JSX.Element => {
  const items = [
    {
      id: "about",
      label: "About",
      to: "/",
    },
    {
      id: "cv",
      label: "CV",
      to: "/cv",
    },
  ];

  return (
    <div className="terminal-nav">
      <header className="terminal-logo">
        <div className="logo terminal-prompt">
          <a href="/" className="no-style">
            Robert Lönnqvist
          </a>
        </div>
      </header>
      <nav className="terminal-menu">
        <ul>
          {items.map((link) => (
            <li key={link.id}>
              <Link
                to={link.to}
                className={`menu-item${active === link.id ? " active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="https://github.com/robertlonnqvist" className="menu-item">
              Code
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/robertlonnqvist"
              className="menu-item"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
