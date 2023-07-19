import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import About from "./About";

describe("About component", () => {
  test("renders About component", () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
