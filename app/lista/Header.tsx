"use client";

import Button from "../components/Button";
import { MdPlaylistAdd, MdRemoveDone } from "react-icons/md";

function Header() {
  return (
    <header className="header-style">
      <Button shape="square" execute={"openOrderModal"}>
        <MdRemoveDone size="24px" />
      </Button>
      <Button shape="square" execute={"openOrderModal"}>
        <MdPlaylistAdd size="24px" />
      </Button>
    </header>
  );
}

export default Header;
