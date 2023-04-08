import React from "react";
import { render } from "@testing-library/react";
import Header from "../index";

describe("Header", () => {
  it("renders the Pokedex logo", () => {
    const { getByAltText } = render(<Header />);
    expect(getByAltText("Pokedex Logo")).toBeInTheDocument();
  });

  it("renders the logo link", () => {
    const { getByRole } = render(<Header />);
    expect(getByRole("link")).toHaveAttribute("href", "/");
  });
});