import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Product from "./Product.jsx";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

function TestProduct({ resolvedObject }) {
  const [quantity, setQuantity] = useState({});

  return (
    <Product
      product={resolvedObject}
      quantity={quantity}
      setQuantity={setQuantity}
    />
  );
}

describe("Product component", () => {
  it("Input quantity increases when increase button is clicked.", async () => {
    const user = userEvent.setup();
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

    render(<TestProduct resolvedObject={resolvedObject} />);

    await user.click(screen.getByRole("button", { name: "Higher quantity" }));

    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
  });

  it("Input value changes when edited to a positive number", async () => {
    const user = userEvent.setup();

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

    render(<TestProduct resolvedObject={resolvedObject} />);

    await user.type(screen.getByRole("spinbutton"), "2");

    expect(screen.getByRole("spinbutton")).toBeInTheDocument("2");
  });

  it("Input value is 0 when input is cleared", async () => {
    const user = userEvent.setup();

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

    render(<TestProduct resolvedObject={resolvedObject} />);

    await user.type(screen.getByDisplayValue(""), "2");
    await user.clear(screen.getByDisplayValue(2));

    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });
});
