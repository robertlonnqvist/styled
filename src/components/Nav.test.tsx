import React from "react";
import { render } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";

test("renders Nav component", () => {
  const { container } = render(
    <MemoryRouter>
      <Nav active="about" />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
