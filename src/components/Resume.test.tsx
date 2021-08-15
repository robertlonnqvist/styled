import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Resume from "./Resume";

test("renders Resume component", () => {
  const { container } = render(
    <MemoryRouter>
      <Resume />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
