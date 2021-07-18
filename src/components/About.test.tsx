import React from "react";
import { render } from "@testing-library/react";
import About from "./About";
import { MemoryRouter } from "react-router-dom";

test("renders About component", () => {
  const { container } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
