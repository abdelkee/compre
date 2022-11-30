"use client";

import { useContext } from "react";
import { ContextDispatch, ContextState } from "./ContextProvider";

export const useSelector = () => useContext(ContextState);
export const useDispatch = () => useContext(ContextDispatch);
