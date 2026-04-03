import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import App from "./App";
import { describe, it, expect, beforeEach, vi } from "vitest";

describe("App Component", () => {
  beforeEach(() => {
    // Clear hash before each test
    window.location.hash = "";
    vi.clearAllMocks();
  });

  it("renders the About page by default", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText(/Software developer and architect/i),
      ).toBeInTheDocument();
    });

    expect(document.title).toContain("About");
  });

  it("navigates to Resume page when hash changes", async () => {
    render(<App />);

    act(() => {
      window.location.hash = "/resume";
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    await waitFor(() => {
      expect(screen.getByText(/Technical skills/i)).toBeInTheDocument();
    });

    expect(document.title).toContain("Resume");
  });

  it("navigates back to About page when clicking the logo link", async () => {
    act(() => {
      window.location.hash = "/resume";
    });
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Technical skills/i)).toBeInTheDocument();
    });

    const logoLink = screen.getByText(/Robert Lönnqvist/i);
    fireEvent.click(logoLink);

    await waitFor(() => {
      expect(
        screen.getByText(/Software developer and architect/i),
      ).toBeInTheDocument();
    });

    expect(window.location.hash).toBe("#/");
  });

  it("navigates to Resume page when clicking the Resume nav link", async () => {
    render(<App />);

    await waitFor(() => {
      expect(
        screen.getByText(/Software developer and architect/i),
      ).toBeInTheDocument();
    });

    const resumeLink = screen.getByRole("link", { name: /Resume/i });
    fireEvent.click(resumeLink);

    await waitFor(() => {
      expect(screen.getByText(/Technical skills/i)).toBeInTheDocument();
    });

    expect(window.location.hash).toBe("#/resume");
  });
});
