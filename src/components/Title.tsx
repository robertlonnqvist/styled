import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps): JSX.Element => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-black rounded-t-lg">
      <div className="flex justify-start space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>
      <div className="text-center flex-grow">{title}</div>
    </div>
  );
};

export default Title;
