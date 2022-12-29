import {IProduct} from "../product/product.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoritesItem: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
    removeFavoritesItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((p) => p.id !== action.payload.id);
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const favoritesActions = favoritesSlice.actions;
