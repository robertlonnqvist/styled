import { render, screen } from "@testing-library/react";
import Resume from "./Resume";
import { RouteContext, routes } from "./routes";
import { describe, it, expect, vi } from "vitest";

describe("Resume Component", () => {
  it("renders summary section", () => {
    render(
      <RouteContext.Provider value={[routes[1], vi.fn()]}>
        <Resume />
      </RouteContext.Provider>,
    );
    expect(screen.getByText("Summary")).toBeInTheDocument();
    expect(
      screen.getByText(/Software developer and architect/i),
    ).toBeInTheDocument();
  });

  it("renders experience items as articles", () => {
    render(
      <RouteContext.Provider value={[routes[1], vi.fn()]}>
        <Resume />
      </RouteContext.Provider>,
    );
    const articles = screen.getAllByRole("article");
    expect(articles.length).toBeGreaterThan(0);
    expect(
      screen.getByText(/Tele2 Sverige AB, System Architect/i),
    ).toBeInTheDocument();
  });

  it("renders technical skills", () => {
    render(
      <RouteContext.Provider value={[routes[1], vi.fn()]}>
        <Resume />
      </RouteContext.Provider>,
    );
    expect(screen.getByText("Technical skills")).toBeInTheDocument();
    expect(screen.getByText("Languages")).toBeInTheDocument();
    expect(
      screen.getByText(/Java, TypeScript\/JavaScript/i),
    ).toBeInTheDocument();
  });
});
