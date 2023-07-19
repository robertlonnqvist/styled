import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Nav from "./Nav";

describe("Nav component", () => {
  test("renders Nav component", () => {
    const { container } = render(
      <MemoryRouter>
        <Nav title="About" />
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
