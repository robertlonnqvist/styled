import { render, screen, within } from "@testing-library/react";
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
      screen.getByText(/Tele2 Sverige AB.*System Architect/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /IAM team responsible for authentication, authorization, and signing for SEB Kort customers across Europe/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders technical skills", () => {
    render(
      <RouteContext.Provider value={[routes[1], vi.fn()]}>
        <Resume />
      </RouteContext.Provider>,
    );
    expect(screen.getByText("Technical skills")).toBeInTheDocument();
    expect(screen.getAllByText("Java").length).toBeGreaterThan(0);
    expect(screen.getAllByText("TypeScript").length).toBeGreaterThan(0);
    expect(screen.getByText("JavaScript/ECMAScript")).toBeInTheDocument();
    const aiSkillsCard = screen
      .getByRole("heading", { name: "AI & Machine Learning" })
      .closest("article");
    if (!aiSkillsCard) {
      throw new Error("AI & Machine Learning skill card was not rendered");
    }
    expect(
      within(aiSkillsCard).getByText("GitHub Copilot"),
    ).toBeInTheDocument();
    expect(within(aiSkillsCard).getByText("Claude Code")).toBeInTheDocument();
    expect(within(aiSkillsCard).getByText("Google Gemini")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "AI as an engineering aid, guided by experience.",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Languages" })).toBeNull();
    expect(screen.queryByText("Education")).toBeNull();
  });

  it("includes role-specific impact and technology context", () => {
    render(
      <RouteContext.Provider value={[routes[1], vi.fn()]}>
        <Resume />
      </RouteContext.Provider>,
    );

    expect(
      screen.getByText(/approximately 2,000 Linux-based embedded devices/i),
    ).toBeInTheDocument();
    expect(screen.getByText("Azure (AKS, APIM)")).toBeInTheDocument();
    expect(screen.getAllByText("Entra ID").length).toBeGreaterThan(0);
  });
});
