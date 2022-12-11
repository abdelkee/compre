"use client";

import { useContext } from "react";
import { AuthContext } from "./AuthContextProvider";
import {
  ListContextDispatch,
  ListContextState,
  ProductContextDispatch,
  ProductContextState,
} from "./ContextProvider";

export const useSelector = () => {
  return {
    productContext: useContext(ProductContextState),
    listContext: useContext(ListContextState),
  };
};
export const useDispatch = () => {
  return {
    productContext: useContext(ProductContextDispatch),
    ListContext: useContext(ListContextDispatch),
  };
};

export const useUser = () => {
  return useContext(AuthContext);
};
