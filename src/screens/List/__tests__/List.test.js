import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { List } from "../index";

jest.mock("../../../lib/axios", () => ({
  
  api: {
    get: jest.fn(() =>
      Promise.resolve({
        data: {
          results: [
            {
              name: "Pikachu",
            },
            {
              name: "Charizard",
            },
          ],
          next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
        },
      })
    ),
  },
}));

describe("List", () => {
  let store;

  it("should render the component without errors", () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(screen.getByText("Lista")).toBeInTheDocument();
  });

  it("should fetch the pokemon data on mount", async () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    await screen.findByText("Charizard");
    expect(screen.getByText("Charizard")).toBeInTheDocument();
  });

  it("should load more pokemon when user scrolls to the end of the list", async () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    await screen.findByText("Charizard");
    window.scrollTo(0, 1000);
    await screen.findByText("Pikachu");
    expect(screen.getByText("Pikachu")).toBeInTheDocument();
  });
});
