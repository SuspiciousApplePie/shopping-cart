import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  it("Title appears", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: "Shopping Cart" }),
    ).toBeInTheDocument();
  });
});
