"use client";

import { createContext, ReactNode, useReducer } from "react";
import {
  initialListState,
  InitialListStateType,
  ListActionType,
  listReducer,
} from "./reducers/listReducer";
import {
  initialProductState,
  InitialProductStateType,
  ProductActionType,
  productReducer,
} from "./reducers/productReducer";

//* ---- PRODUCT CONTEXT
const ProductContextState =
  createContext<InitialProductStateType>(initialProductState);
const ProductContextDispatch = createContext<
  (action: ProductActionType) => void
>(() => {});

//* ---- LIST CONTEXT
const ListContextState = createContext<InitialListStateType>(initialListState);
const ListContextDispatch = createContext<(action: ListActionType) => void>(
  () => {}
);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );
  const [listState, listDispatch] = useReducer(listReducer, initialListState);

  return (
    <ProductContextState.Provider value={productState}>
      <ProductContextDispatch.Provider value={productDispatch}>
        <ListContextState.Provider value={listState}>
          <ListContextDispatch.Provider value={listDispatch}>
            {children}
          </ListContextDispatch.Provider>
        </ListContextState.Provider>
      </ProductContextDispatch.Provider>
    </ProductContextState.Provider>
  );
}

export {
  ProductContextState,
  ProductContextDispatch,
  ListContextState,
  ListContextDispatch,
};
