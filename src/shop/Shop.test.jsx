import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Shop from "./Shop.jsx";

beforeEach(() => {
  globalThis.fetch = vi.fn();
});

afterEach(() => {
  vi.resetAllMocks();
});

describe("Shop Component", () => {
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

  it("Shop component appears", () => {
    render(<Shop products={[resolvedObject]} />);

    expect(
      screen.getByRole("heading", { name: "Products" }),
    ).toBeInTheDocument();
  });

  it("Displays the fetched products data", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: [resolvedObject] });
    render(<Shop products={[resolvedObject]} />);

    await waitFor(() => {
      expect(screen.getByText(resolvedObject.title)).toBeInTheDocument();
    });
  });
});
