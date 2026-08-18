import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Shop from "./Shop.jsx";
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

  const testQuantity = { [resolvedObject.id]: 0 };

  it("Shop component appears", () => {
    useOutletContext.mockReturnValue({
      products: [],
      loading: true,
      error: false,
      quantity: testQuantity,
    });

    render(<Shop />);

    expect(
      screen.getByRole("heading", { name: "Products" }),
    ).toBeInTheDocument();
  });

  it("Displays the fetched products data", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: [resolvedObject] });

    useOutletContext.mockReturnValue({
      products: [resolvedObject],
      loading: false,
      error: false,
      quantity: testQuantity,
    });
    render(<Shop />);

    await waitFor(() => {
      expect(screen.getByText(resolvedObject.title)).toBeInTheDocument();
    });
  });

  it("Shows loading state while products are loading", () => {
    fetch(() => {
      new Promise(() => []);
    });

    useOutletContext.mockReturnValue({
      products: [],
      loading: true,
      error: false,
      quantity: testQuantity,
    });
    render(<Shop />);

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("Displays empty shopping list", async () => {
    const emptyJSON = [];
    const emptyMsg = "No products available.";
    fetch.mockResolvedValueOnce({ ok: true, json: emptyJSON });
    useOutletContext.mockReturnValue({
      products: emptyJSON,
      loading: false,
      error: false,
      quantity: testQuantity,
    });
    render(<Shop />);

    await waitFor(() => {
      expect(screen.getByText(emptyMsg)).toBeInTheDocument();
    });
  });

  it("Displays error message when API call fails.", async () => {
    const failedFetchMsg = "Something went wrong. Please try again.";

    fetch.mockRejectedValueOnce(new Error(failedFetchMsg));

    useOutletContext.mockReturnValue({
      products: [],
      loading: false,
      error: true,
      quantity: testQuantity,
    });

    render(<Shop />);

    await waitFor(() => {
      expect(screen.getByText(failedFetchMsg)).toBeInTheDocument();
    });
  });
});
