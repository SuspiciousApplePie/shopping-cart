import { it, expect, describe } from "vitest";
import { screen, render } from "@testing-library/react";
import Homepage from "./Homepage";
import { MemoryRouter } from "react-router";

describe("Homepage component", () => {
  it("Title appears", () => {
    const header = "Welcome to the Shopping Cart";
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: header })).toBeInTheDocument();
  });

  it("About section appears", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );
    expect(
      screen.getByRole("heading", { name: "About Us" }),
    ).toBeInTheDocument();
  });
});
