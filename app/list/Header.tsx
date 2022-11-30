"use client";

import Button from "../shared/Button";
import { MdPlaylistAdd, MdRemoveDone } from "react-icons/md";

function Header() {
  // ------------- FUNCTIONS -------------
  const openItemModal = () => {
    alert("item modal opened");
  };
  const clearCheckedItems = () => {
    alert("checked items cleared");
  };
  // ------------- JSX -------------
  return (
    <header className="header-style">
      <Button shape="square" execute={clearCheckedItems}>
        <MdRemoveDone size="24px" />
      </Button>
      <Button shape="square" execute={openItemModal}>
        <MdPlaylistAdd size="24px" />
      </Button>
    </header>
  );
}

export default Header;
