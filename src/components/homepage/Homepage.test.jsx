import { it, expect, describe, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Homepage from "./Homepage";
import { MemoryRouter, useOutletContext } from "react-router";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

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

  it("Product photo appears", () => {
    const resolvedObject = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      rating: {
        rate: 3.9,
        count: 120,
      },
    };
    useOutletContext.mockReturnValue({
      product: [resolvedObject],
    });
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );
    expect(
      screen.getByAltText(`${resolvedObject.title} image`),
    ).toBeInTheDocument();
  });
});
