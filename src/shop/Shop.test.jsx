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

  const testQuantity = { [resolvedObject.id]: 0 };

  it("Shop component appears", () => {
    render(<Shop products={[resolvedObject]} quantity={testQuantity} />);

    expect(
      screen.getByRole("heading", { name: "Products" }),
    ).toBeInTheDocument();
  });

  it("Displays the fetched products data", async () => {
    fetch.mockResolvedValueOnce({ ok: true, json: [resolvedObject] });
    render(
      <Shop
        products={[resolvedObject]}
        loading={false}
        error={false}
        quantity={testQuantity}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText(resolvedObject.title)).toBeInTheDocument();
    });
  });

  it("Shows loading state while products are loading", () => {
    fetch(() => {
      new Promise(() => []);
    });

    render(
      <Shop
        products={[]}
        loading={true}
        error={false}
        quantity={testQuantity}
      />,
    );

    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("Displays empty shopping list", async () => {
    const emptyJSON = [];
    const emptyMsg = "No products available.";
    fetch.mockResolvedValueOnce({ ok: true, json: emptyJSON });
    render(
      <Shop
        products={emptyJSON}
        loading={false}
        error={false}
        quantity={testQuantity}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText(emptyMsg)).toBeInTheDocument();
    });
  });

  it("Displays error message when API call fails.", async () => {
    const failedFetchMsg = "Something went wrong. Please try again.";

    fetch.mockRejectedValueOnce(new Error(failedFetchMsg));
    render(
      <Shop
        products={[]}
        loading={false}
        error={true}
        quantity={testQuantity}
      />,
    );

    await waitFor(() => {
      expect(screen.getByText(failedFetchMsg)).toBeInTheDocument();
    });
  });
});
