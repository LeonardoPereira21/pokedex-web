import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Card from "../index";
import { setFavorites } from "../../../redux/pokemon/slice";

const mockStore = configureStore([]);

describe("Card component", () => {
  let store;
  const name = "Pikachu";

  beforeEach(() => {
    store = mockStore({
      pokemon: {
        favorites: [],
      },
    });
  });

  it("should render the Pokemon name", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Card name={name} />
      </Provider>
    );

    expect(getByText(name)).toBeInTheDocument();
  });

  it("should add a Pokemon to favorites when the checkbox is clicked", () => {
    store.dispatch = jest.fn();

    const { getByLabelText } = render(
      <Provider store={store}>
        <Card name={name} />
      </Provider>
    );

    fireEvent.click(getByLabelText(/Favorito?/));

    expect(store.dispatch).toHaveBeenCalledWith(setFavorites(name));
  });

  it("should check the checkbox if the Pokemon is in favorites", () => {
    store = mockStore({
      pokemon: {
        favorites: [name],
      },
    });

    const { getByLabelText } = render(
      <Provider store={store}>
        <Card name={name} />
      </Provider>
    );

    expect(getByLabelText(/Favorito?/)).toBeChecked();
  });
});
