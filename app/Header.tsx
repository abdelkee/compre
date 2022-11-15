// ------------- library import -------------
import { MdAdd } from "react-icons/md";

// ------------- local import -------------
import Button from "./components/Button";
import SearchBar from "./SearchBar";
import { AppContext } from "./utils/contextProvider";

function Header() {
  // ------------- JSX -------------
  return (
    <header className="header-style">
      <SearchBar />
      <Button shape="square" execute={"openOrderModal"}>
        <MdAdd size={"24px"} />
      </Button>
    </header>
  );
}

export default Header;
