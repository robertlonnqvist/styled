import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Nav from "./Nav";

describe("Nav component", () => {
  test("renders Nav component", () => {
    const { container } = render(<Nav title="About" />);
    expect(container).toMatchSnapshot();
  });
});
