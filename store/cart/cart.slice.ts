import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartProduct } from "../product/product.types";
import {updateLocalStorage} from "../localStorage";

const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");

const initialState: ICartProduct[] = cartItems;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<ICartProduct>) => {
      state.push(action.payload);
      updateLocalStorage("cart", state);
    },
    removeCartItem: (state, action: PayloadAction<{ id: number }>) => {
      const newState = state.filter((p) => p.id !== action.payload.id);
      updateLocalStorage("cart", newState);
      return newState
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
