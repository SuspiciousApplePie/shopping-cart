import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import { MemoryRouter } from "react-router";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App", () => {
  it("renders headline", () => {
    render(
      <MemoryRouter>
        <App title="React" />
      </MemoryRouter>,
    );

    screen.debug();

    // check if App components renders headline
  });
});
