import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Resume from "./Resume";

describe("Resume component", () => {
  test("renders Resume component", () => {
    const { container } = render(<Resume />);
    expect(container).toMatchSnapshot();
  });
});
