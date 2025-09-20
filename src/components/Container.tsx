import { JSX, PropsWithChildren } from "react";
import Nav from "./Nav";

const Container = ({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>): JSX.Element => {
  return (
    <main
      className="container mx-auto max-w-4xl p-3 md:p-10"
      aria-label={title}
    >
      <Nav title={title} />
      {children}
    </main>
  );
};

export default Container;
