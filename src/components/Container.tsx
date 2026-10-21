import { JSX, PropsWithChildren } from "react";
import Nav from "./Nav";

const Container = ({
  title,
  isLight,
  onToggleTheme,
  children,
}: PropsWithChildren<{
  title: string;
  isLight: boolean;
  onToggleTheme: () => void;
}>): JSX.Element => {
  return (
    <>
      <a
        className="absolute left-4 top-2 z-50 -translate-y-[200%] rounded bg-white px-4 py-3 font-sans text-sm font-semibold text-black focus:translate-y-0 focus:outline-2 focus:outline-offset-2 focus:outline-blue"
        href="#main-content"
      >
        Skip to main content
      </a>
      <Nav title={title} isLight={isLight} onToggleTheme={onToggleTheme} />
      <main
        className="mx-auto w-[calc(100%-1.875rem)] max-w-[26.25rem] pb-[4.5rem] min-[481px]:w-[calc(100%-2.25rem)] min-[481px]:max-w-[38.75rem] md:w-[calc(100%-3.5rem)] md:max-w-[72.5rem]"
        id="main-content"
        aria-label={title}
        tabIndex={-1}
      >
        {children}
      </main>
    </>
  );
};

export default Container;
