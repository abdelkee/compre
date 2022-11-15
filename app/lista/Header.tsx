"use client";

import Button from "../components/Button";
import { MdPlaylistAdd, MdRemoveDone } from "react-icons/md";

function Header() {
  return (
    <header className="header-style">
      <Button shape="square" execute={() => {}}>
        <MdRemoveDone size="24px" />
      </Button>
      <Button shape="square" execute={() => {}}>
        <MdPlaylistAdd size="24px" />
      </Button>
    </header>
  );
}

export default Header;
