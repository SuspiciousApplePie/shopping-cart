import { expect, describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Sidebar from "./Sidebar";

describe("Sidebar component", () => {
  it("Navigation appears", () => {
    const sampleMap = new Map();
    render(
      <MemoryRouter>
        <Sidebar cart={sampleMap} />
      </MemoryRouter>,
    );
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Shop" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Cart/ })).toBeInTheDocument();
  });

  it("Number of items in cart appears", () => {
    const sampleCartItem = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: 109.95 * 2,
      quantity: 2,
    };

    const sampleMap = new Map();
    sampleMap.set(sampleCartItem.id, sampleCartItem);

    render(
      <MemoryRouter>
        <Sidebar cart={sampleMap} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });
});
