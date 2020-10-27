import icon from "./github.svg";
import React from "react";

const App = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className="container">
      <div className="terminal-nav">
        <header className="terminal-logo">
          <div className="logo terminal-prompt">
            <a href="/" className="no-style">
              _
            </a>
          </div>
        </header>
        <nav className="terminal-menu">
          <ul>
            <li>
              <a
                href="https://github.com/robertlonnqvist"
                className="menu-item"
              >
                <span>
                  <img src={icon} alt="github" />
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default App;
