import { render, screen } from "@testing-library/react";
import { RouteContext, routes } from "./routes";
import Nav from "./Nav";
import { describe, it, expect, vi } from "vitest";

describe("Nav Component", () => {
  const setRoute = vi.fn();

  it("renders correctly with given title", () => {
    render(
      <RouteContext.Provider value={[routes[0], setRoute]}>
        <Nav title="About" />
      </RouteContext.Provider>,
    );

    expect(screen.getByText(/Robert Lönnqvist/i)).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Resume")).toBeInTheDocument();
    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("highlights the active link", () => {
    render(
      <RouteContext.Provider value={[routes[1], setRoute]}>
        <Nav title="Resume" />
      </RouteContext.Provider>,
    );

    const resumeLink = screen.getByRole("link", { name: /Resume/i });
    expect(resumeLink).toHaveClass("bg-blue text-bg");
    expect(resumeLink).toHaveAttribute("aria-current", "page");
  });

  it("external links have correct attributes", () => {
    render(
      <RouteContext.Provider value={[routes[0], setRoute]}>
        <Nav title="About" />
      </RouteContext.Provider>,
    );

    const codeLink = screen.getByText("Code");
    expect(codeLink).toHaveAttribute("target", "_blank");
    expect(codeLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
