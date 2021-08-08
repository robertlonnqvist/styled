import React, { useEffect } from "react";
import Nav from "./Nav";

interface ContainerProps {
  title: string;
  headline: string;
}

const Container = ({
  title,
  headline,
  children,
}: React.PropsWithChildren<ContainerProps>): JSX.Element => {
  useEffect(() => {
    window.document.title = `Robert Lönnqvist | ${title}`;
  }, [title]);

  return (
    <div className="container mx-auto max-w-4xl p-1 md:p-10">
      <Nav title={title} />
      <h1 className="text-2xl text-green-400 font-bold mb-3">{headline}</h1>
      {children}
    </div>
  );
};

export default Container;