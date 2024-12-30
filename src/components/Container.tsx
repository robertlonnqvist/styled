import { JSX, PropsWithChildren } from "react";
import Nav from "./Nav";

const Container = ({
  title,
  headline,
  children,
}: PropsWithChildren<{
  title: string;
  headline: string;
}>): JSX.Element => {
  return (
    <div className="container mx-auto max-w-4xl p-3 md:p-10">
      <Nav title={title} />
      <h1 className="text-2xl text-green-400 font-bold mb-3">{headline}</h1>
      {children}
    </div>
  );
};

export default Container;
