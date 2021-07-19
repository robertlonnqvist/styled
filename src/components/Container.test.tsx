import React from "react";
import { render } from "@testing-library/react";
import Container from "./Container";
import { MemoryRouter } from "react-router-dom";

test("renders Nav component", () => {
  const { container } = render(
    <MemoryRouter>
      <Container title="testTitle" headline="testheadline" />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
