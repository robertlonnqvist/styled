import { JSX, PropsWithChildren } from "react";
import Nav from "./Nav";

const Container = ({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>): JSX.Element => {
  return (
    <div className="container mx-auto max-w-4xl p-3 md:p-10">
      <Nav title={title} />
      {children}
    </div>
  );
};

export default Container;
