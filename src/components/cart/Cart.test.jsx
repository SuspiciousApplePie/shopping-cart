import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Cart from "./Cart";
import { useOutletContext } from "react-router";

beforeEach(() => {
  globalThis.fetch = vi.fn();
});

afterEach(() => {
  vi.resetAllMocks();
});

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("Cart component", () => {
  it("Cart component appears", () => {
    useOutletContext.mockReturnValue({
      cart: new Map(),
    });
    render(<Cart />);
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
  });

  it("Cart renders item if there is an item", () => {
    const sampleCartItem = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95 * 2,
      quantity: 2,
    };
    useOutletContext.mockReturnValue({
      cart: new Map([[sampleCartItem.id, sampleCartItem]]),
    });

    render(<Cart />);

    expect(
      screen.getByRole("heading", { name: sampleCartItem.title }),
    ).toBeInTheDocument();
  });
});
