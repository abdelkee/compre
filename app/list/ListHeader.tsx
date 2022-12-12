"use client";

import Button from "../shared/Button";
import { MdPlaylistAdd, MdRemoveDone } from "react-icons/md";
import { useDispatch } from "../../context/ContextHook";
import { Actions } from "../../context/reducers/listReducer";

function ListHeader() {
  //* ---- HOOKS
  const dispatch = useDispatch().ListContext;
  //* ---- STATE
  //* ---- FUNCTIONS
  const openItemModal = () => {
    dispatch({ type: Actions.setIsItemFormOpen, payload: true });
  };
  const clearCheckedItems = () => {
    alert("checked items cleared");
  };
  //* ---- JSX
  return (
    <header className="header-style flex-row-reverse">
      <Button shape="square" execute={openItemModal}>
        <MdPlaylistAdd size="24px" />
      </Button>
    </header>
  );
}

export default ListHeader;
