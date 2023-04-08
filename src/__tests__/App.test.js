import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App", () => {
  it("renders the welcome message", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText(/Seja Bem-vindo\(a\)!/i)).toBeInTheDocument();
  });

  it("renders the Pokemon logo", () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByAltText(/pokedex/i)).toBeInTheDocument();
  });

});