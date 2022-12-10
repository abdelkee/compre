"use client";

import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import { ProductContextDispatch, ProductContextState } from "./ContextProvider";

export const useSelector = () => {
  return {
    productContext: useContext(ProductContextState),
  };
};
export const useDispatch = () => {
  return {
    productContext: useContext(ProductContextDispatch),
  };
};

export const useUser = () => {
  return useContext(AuthContext);
};
