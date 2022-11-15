"use client";

import { useContext } from "react";
// ------------- library import -------------
import { MdAdd, MdSearch } from "react-icons/md";

// ------------- local import -------------
import Button from "./components/Button";
import SearchBar from "./SearchBar";
import { AppContext } from "./utils/contextProvider";

function Header() {
  const { setSearchBarIsOpen } = useContext(AppContext);
  // ------------- FUNCTIONS -------------
  const addNew = () => {
    //! set new product modal to true
  };

  // ------------- JSX -------------
  return (
    <header className="header-style">
      {/* <Button shape="square" execute={() => setSearchBarIsOpen(true)}>
        <MdSearch size={"24px"} />
      </Button> */}
      <SearchBar />
      <Button shape="square" execute={addNew}>
        <MdAdd size={"24px"} />
      </Button>
    </header>
  );
}

export default Header;
