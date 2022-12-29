import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart/cart.slice";
import { favoritesActions } from "../store/favorites/favorites.slice";

const allActions = {
  ...cartActions,
  ...favoritesActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
