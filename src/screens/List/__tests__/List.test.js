import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { List } from "../index";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("List", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        favorites: [],
        data: [
          { name: "bulbasaur" },
          { name: "charmander" },
          { name: "squirtle" },
        ],
        next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
      },
    });
  });

  it("should render the component without errors", () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    expect(screen.getByText("Lista")).toBeInTheDocument();
  });

  it("should render the List component with a card for each pokemon", () => {
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );
    const card = screen.getByText("bulbasaur");
    expect(card).toBeInTheDocument();
  });
});
