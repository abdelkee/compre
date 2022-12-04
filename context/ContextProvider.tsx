"use client";

import { createContext, ReactNode, useReducer } from "react";
import { ItemType, ProductType } from "../types";

export enum Actions {
  "setOrderedProduct",
  "setEditMode",
}

type InitialStateType = {
  orderedProduct: ProductType | null;
  editMode: boolean;
};

const initialState = {
  orderedProduct: null,
  editMode: false,
};

type ActionType =
  | { type: Actions.setOrderedProduct; payload: ProductType }
  | { type: Actions.setEditMode; payload: boolean };

const ContextState = createContext<InitialStateType>(initialState);
const ContextDispatch = createContext<(action: ActionType) => void>(() => {});

const productReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case Actions.setOrderedProduct:
      return {
        ...state,
        orderedProduct: action.payload,
      };
    case Actions.setEditMode:
      return {
        ...state,
        editMode: action.payload,
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
