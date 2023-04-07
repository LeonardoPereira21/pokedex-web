import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./pokemon/slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const pokemonPersistedConfig = {
  key: "pokemon",
  storage,
  blacklist: ["data", "next"],
};

const combinedReducers = combineReducers({
  pokemon: persistReducer(pokemonPersistedConfig, pokemonSlice.reducer),
});

const persistConfig = {
  key: "root",
  storage,
  stateReconcilier: autoMergeLevel2,
  blacklist: ["pokemon"]
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
