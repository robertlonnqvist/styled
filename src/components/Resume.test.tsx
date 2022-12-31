import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Resume from "./Resume";

describe("Resume component", () => {
  test("renders Resume component", () => {
    const { container } = render(
      <MemoryRouter>
        <Resume />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
