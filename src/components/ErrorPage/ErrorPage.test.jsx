import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import ErrorPage from "./ErrorPage.jsx";

describe("Error Page", () => {
  it("Error message appears", () => {
    const errMsg = "Page not found";
    const errSUbMsg = "Please check the URL and try again.";

    render(<ErrorPage />);
    expect(screen.getByRole("heading", { name: errMsg })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: errSUbMsg }),
    ).toBeInTheDocument();
  });
});
