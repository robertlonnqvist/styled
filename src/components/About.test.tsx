import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import About from "./About";

describe("About component", () => {
  test("renders About component", () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
  });
});
