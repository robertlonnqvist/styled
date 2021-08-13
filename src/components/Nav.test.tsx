import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Nav from "./Nav";

test("renders Nav component", () => {
  const { container } = render(
    <MemoryRouter>
      <Nav title="About" />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
