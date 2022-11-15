import Button from "../components/Button";
import { MdOutlineFilterAlt, MdSortByAlpha } from "react-icons/md";

function Header() {
  return (
    <header className="header-style">
      <Button shape="square" execute={"openOrderModal"}>
        <MdSortByAlpha size="24px" />
      </Button>
      <Button shape="square" execute={"openOrderModal"}>
        <MdOutlineFilterAlt size="24px" />
      </Button>
    </header>
  );
}

export default Header;
