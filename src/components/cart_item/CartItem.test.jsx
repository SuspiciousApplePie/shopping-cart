import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./CartItem";
import { useState } from "react";

function TestCartItem({ item, cartMap }) {
  const [cart, setCart] = useState(cartMap);
  const removeFromCart = (id) => {
    if (cart.has(id)) {
      setCart((prev) => {
        const next = new Map(prev);
        next.delete(id);
        return next;
      });
    }
  };
  if (!cart.has(item.id)) return null;
  return (
    <CartItem
      item={cart.get(item.id)}
      removeFromCart={removeFromCart}
      setCart={setCart}
    />
  );
}

describe("Cart Item component", () => {
  const sampleCartItem = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    price: 109.5,
    quantity: 2,
  };

  it("User removes item in cart", async () => {
    const user = userEvent.setup();
    render(
      <TestCartItem
        item={sampleCartItem}
        cartMap={new Map([[sampleCartItem.id, sampleCartItem]])}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Remove" }));

    expect(screen.queryByRole("figure")).not.toBeInTheDocument();
  });

  it("User successfully increase quantity", async () => {
    const user = userEvent.setup();
    render(
      <TestCartItem
        item={sampleCartItem}
        cartMap={new Map([[sampleCartItem.id, sampleCartItem]])}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Increase quantity" }));
    expect(screen.getByText("Quantity: 3")).toBeInTheDocument();
    expect(
      screen.getByText(`Total: $${(109.5 * 3).toFixed(2)}`),
    ).toBeInTheDocument();
  });

  it("User successfully decrease quantity", async () => {
    const user = userEvent.setup();
    render(
      <TestCartItem
        item={sampleCartItem}
        cartMap={new Map([[sampleCartItem.id, sampleCartItem]])}
      />,
    );
    await user.click(screen.getByRole("button", { name: "Decrease quantity" }));
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
    expect(
      screen.getByText(`Total: $${(109.5).toFixed(2)}`),
    ).toBeInTheDocument();
  });

  it("Item quantity does not get less than 1", async () => {
    const sampleCartItem = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: 109.5,
      quantity: 1,
    };

    const user = userEvent.setup();
    render(
      <TestCartItem
        item={sampleCartItem}
        cartMap={new Map([[sampleCartItem.id, sampleCartItem]])}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Decrease quantity" }));

    expect(screen.queryByText("Quantity: 0")).not.toBeInTheDocument();
    screen.debug();
    expect(
      screen.getByText(`Total: $${(109.5).toFixed(2)}`),
    ).toBeInTheDocument();
  });
});
