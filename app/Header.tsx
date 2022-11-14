"use client";

// ------------- library import -------------
import { MdAdd, MdSearch } from "react-icons/md";

// ------------- local import -------------
import Button from "./components/Button";

function Header() {
  // ------------- FUNCTIONS -------------
  const addNew = () => {
    //! set new product modal to true
  };
  const openSearchBar = () => {
    //! set search bar to ture
  };

  // ------------- JSX -------------
  return (
    <header className="header-style">
      <Button shape="square" execute={openSearchBar}>
        <MdSearch size={"24px"} />
      </Button>
      <Button shape="square" execute={addNew}>
        <MdAdd size={"24px"} />
      </Button>
    </header>
  );
}

export default Header;
