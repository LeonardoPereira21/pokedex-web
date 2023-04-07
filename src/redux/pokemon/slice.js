import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { data: [], next: null, favorites: [] };
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setNext: (state, { payload }) => {
      return { ...state, next: payload };
    },
    setData: (state, { payload }) => {
      return {
        ...state,
        data: [
          ...new Map(
            [...state.data, ...payload].map((item) => [item.name, item])
          ).values(),
        ],
      };
    },
    setFavorites: (state, { payload }) => {
      let favorites = current(state.favorites);
      const pokemon = favorites.find((item) => item === payload);
      if (pokemon) {
        favorites = favorites.filter((item) => item !== payload);
      } else {
       favorites = [...favorites, payload]
      }
      return { ...state, favorites };
    },
  },
});

export const { setData, setNext, setFavorites } = pokemonSlice.actions;
