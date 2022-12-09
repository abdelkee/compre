"use client";

import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import {
  CartContextDispatch,
  CartContextState,
  ProductContextDispatch,
  ProductContextState,
} from "./ContextProvider";

export const useSelector = () => {
  return {
    productContext: useContext(ProductContextState),
    cartContext: useContext(CartContextState),
  };
};
export const useDispatch = () => {
  return {
    productContext: useContext(ProductContextDispatch),
    cartContext: useContext(CartContextDispatch),
  };
};

export const useUser = () => {
  return useContext(AuthContext);
};
