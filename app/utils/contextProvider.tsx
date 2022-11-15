"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface AppContextType {
  searchBarIsOpen: boolean;
  setSearchBarIsOpen: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  searchBarIsOpen: false,
} as AppContextType;

export const AppContext = createContext<AppContextType>(defaultState);

// ---------- PROVIDER -------------

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState<boolean>(
    defaultState.searchBarIsOpen
  );
  const store = {
    searchBarIsOpen,
    setSearchBarIsOpen,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default ContextProvider;
