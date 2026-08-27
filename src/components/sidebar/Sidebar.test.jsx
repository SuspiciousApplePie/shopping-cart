import { expect, describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Sidebar from "./Sidebar";

describe("Sidebar component", () => {
  it("Navigation appears", () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Cart" })).toBeInTheDocument();
  });
});
