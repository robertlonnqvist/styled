import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Container from "./Container";

describe("Nav component", () => {
  test("renders Nav component", () => {
    const { container } = render(
      <MemoryRouter>
        <Container title="testTitle" headline="testheadline" />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
  test("changing title on render", () => {
    render(
      <MemoryRouter>
        <Container title="testTitle" headline="testheadline" />
      </MemoryRouter>
    );
    expect(window.document.title).toEqual("Robert Lönnqvist | testTitle");
  });
});
