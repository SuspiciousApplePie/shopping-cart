import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router";

describe("Header component", () => {
  it("Title appears", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "Shopping Cart" }),
    ).toBeInTheDocument();
  });
});
