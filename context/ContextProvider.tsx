"use client";

import { createContext, ReactNode, useReducer } from "react";

export enum Actions {
  "setNewProductOpen",
  "setNewOrderOpen",
}

const initialState = {
  isNewProductOpen: false,
  isNewOrderOpen: false,
};

type ActionType =
  | { type: Actions.setNewProductOpen; payload: boolean }
  | { type: Actions.setNewOrderOpen; payload: boolean };

const ContextState = createContext<typeof initialState>(initialState);
const ContextDispatch = createContext<(action: ActionType) => void>(() => {});

const productReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case Actions.setNewProductOpen:
      return {
        ...state,
        isNewProductOpen: action.payload,
      };
    case Actions.setNewOrderOpen:
      return {
        ...state,
        isNewOrderOpen: action.payload,
      };
    default:
      return state;
  }
};

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
