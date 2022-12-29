import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./product/product.api";
import { cartReducer } from "./cart/cart.slice";
import { favoritesReducer } from "./favorites/favorites.slice";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
