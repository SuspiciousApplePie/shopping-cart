import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import ErrorPage from "./ErrorPage.jsx";
import { MemoryRouter } from "react-router";

describe("Error Page", () => {
  it("Error message appears", () => {
    const errMsg = "Page not found";
    const errSUbMsg = "Please check the URL and try again.";

    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: errMsg })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: errSUbMsg }),
    ).toBeInTheDocument();
  });
});
