import React from "react";
import Nav from "./Nav";
import Title from "./Title";

interface ContainerProps {
  title: string;
  headline: string;
}

const Container = ({
  title,
  headline,
  children,
}: React.PropsWithChildren<ContainerProps>): JSX.Element => {
  return (
    <div className="container mx-auto max-w-4xl p-1 md:p-10">
      <Nav title={title} />
      <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg">
        <Title title={title} />
        <div className="m-3">
          <h1 className="text-2xl text-green-400 mb-3">{headline}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
