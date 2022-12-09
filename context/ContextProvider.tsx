"use client";

import { createContext, ReactNode, useReducer } from "react";
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
const CartContextState = createContext<InitialCartStateType>(initialCartState);
const CartContextDispatch = createContext<(action: CartActionType) => void>(
  () => {}
);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);
  return (
    <ProductContextState.Provider value={productState}>
      <ProductContextDispatch.Provider value={productDispatch}>
        <CartContextState.Provider value={cartState}>
          <CartContextDispatch.Provider value={cartDispatch}>
            {children}
          </CartContextDispatch.Provider>
        </CartContextState.Provider>
      </ProductContextDispatch.Provider>
    </ProductContextState.Provider>
  );
}

export {
  ProductContextState,
  ProductContextDispatch,
  CartContextState,
  CartContextDispatch,
};
