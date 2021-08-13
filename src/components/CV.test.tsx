import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import CV from "./CV";

test("renders CV component", () => {
  const { container } = render(
    <MemoryRouter>
      <CV />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
