"use client";

import { createContext, ReactNode, useReducer } from "react";
import {
  ActionType,
  initialState,
  InitialStateType,
  productReducer,
} from "./reducers/productReducer";

const ContextState = createContext<InitialStateType>(initialState);
const ContextDispatch = createContext<(action: ActionType) => void>(() => {});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [productState, dispatch] = useReducer(productReducer, initialState);
  return (
    <ContextState.Provider value={productState}>
      <ContextDispatch.Provider value={dispatch}>
        {children}
      </ContextDispatch.Provider>
    </ContextState.Provider>
  );
}

export { ContextState, ContextDispatch };
