import { IProduct } from "../product/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateLocalStorage } from "../localStorage";

const isServer = typeof window === "undefined";

let favoritesItems: IProduct[] = [];

if (!isServer) {
  favoritesItems = JSON.parse(localStorage.getItem("favorites") || "[]");
}

const initialState: IProduct[] = favoritesItems;

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoritesItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
      updateLocalStorage("favorites", state);
    },
    removeFavoritesItem: (state, action: PayloadAction<{ id: number }>) => {
      const newState = state.filter((p) => p.id !== action.payload.id);
      updateLocalStorage("favorites", newState);
      return newState;
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
