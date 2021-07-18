import React from "react";
import { render } from "@testing-library/react";
import CV from "./CV";
import { MemoryRouter } from "react-router-dom";

test("renders CV component", () => {
  const { container } = render(
    <MemoryRouter>
      <CV />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
