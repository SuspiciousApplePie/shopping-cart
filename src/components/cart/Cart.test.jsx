import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useOutletContext } from "react-router";
import Cart from "./Cart";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");

  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

describe("Cart component", () => {
  it("Cart component appears", () => {
    render(<Cart />);
    expect(screen.getByRole("heading", { name: "Cart" })).toBeInTheDocument();
  });
});
