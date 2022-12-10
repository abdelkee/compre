"use client";

import {
  createContext,
  ReactNode,
  useReducer,
  useEffect,
  useState,
} from "react";
import { OrderType } from "../types";
import { supabase } from "../utils/initSupabase";
import {
  CartActionType,
  cartReducer,
  initialCartState,
  InitialCartStateType,
} from "./reducers/cartReducer";
import {
  initialProductState,
  InitialProductStateType,
  ProductActionType,
  productReducer,
} from "./reducers/productReducer";

const ProductContextState =
  createContext<InitialProductStateType>(initialProductState);
const ProductContextDispatch = createContext<
  (action: ProductActionType) => void
>(() => {});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  return (
    <ProductContextState.Provider value={productState}>
      <ProductContextDispatch.Provider value={productDispatch}>
        {children}
      </ProductContextDispatch.Provider>
    </ProductContextState.Provider>
  );
}

export { ProductContextState, ProductContextDispatch };
