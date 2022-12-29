import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICartProduct} from "../product/product.types";


const initialState: ICartProduct[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<ICartProduct>) => {
      state.push(action.payload);
    },
    removeCartItem: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter((p) => p.id !== action.payload.id)
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
