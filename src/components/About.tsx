import { JSX } from "react";
import Container from "./Container";

const About = (): JSX.Element => {
  return (
    <Container
      title="About"
      headline="Software developer and architect"
    >
      <p className="mb-3">
        <b>I love writing code</b> and being part of every aspect of the
        software development process. I&#x27;m passionate about technologies and
        tools that make great products and increase developer productivity.
      </p>
      <p className="mb-3">
        Currently, I work as a software architect and tech lead, supporting
        teams to make the right decisions.
      </p>
    </Container>
  );
};

export default About;
