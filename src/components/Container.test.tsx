import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react";

import Container from "./Container";

describe("Nav component", () => {
  test("renders Nav component", () => {
    const { container } = render(
      <Container title="testTitle" headline="testheadline" />,
    );
    expect(container).toMatchSnapshot();
  });
});
