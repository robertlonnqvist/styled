import React from "react";
import Nav from "./Nav";

const About = (): JSX.Element => {
  return (
    <div className="container">
      <Nav active="about" />
      <h1>Freelance software developer and architect</h1>
      <p>
        <b>I love writing code</b> and being part of every aspect of the
        software development process. I'm passionate about technologies and
        tools that make great products and increase developer productivity.
        Currently, I work as a software architect and tech lead, supporting
        agile development teams to make the right decisions.
      </p>
    </div>
  );
};

export default About;
