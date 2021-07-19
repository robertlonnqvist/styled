import React from "react";
import { render } from "@testing-library/react";
import Title from "./Title";

test("renders Nav component", () => {
  const { container } = render(<Title title="test" />);
  expect(container).toMatchSnapshot();
});
