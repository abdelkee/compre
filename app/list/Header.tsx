"use client";

import Button from "../shared/Button";
import { MdPlaylistAdd, MdRemoveDone } from "react-icons/md";
import { useUser } from "../../context/ContextHook";

function Header() {
  const { session } = useUser();
  // ------------- FUNCTIONS -------------
  const openItemModal = () => {
    alert("item modal opened");
  };
  const clearCheckedItems = () => {
    alert("checked items cleared");
  };
  if (session === null) return <div>No session</div>;
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
