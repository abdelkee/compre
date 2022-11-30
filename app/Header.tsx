"use client";

// ------------- library import -------------
import { MdAdd } from "react-icons/md";
// ------------- local import -------------
import Button from "./shared/Button";
import SearchBar from "./SearchBar";
import { useDispatch } from "../context/ContextHook";
import { Actions } from "../context/ContextProvider";

function Header() {
  const dispatch = useDispatch();
  // ------------- FUNCTIONS -------------
  const openProductModal = () => {
    dispatch({ type: Actions.setNewProductOpen, payload: true });
  };
  // ------------- JSX -------------
  return (
    <header className="header-style">
      <SearchBar />

      <Button shape="square" execute={openProductModal}>
        <MdAdd size={"24px"} />
      </Button>
    </header>
  );
}

export default Header;
