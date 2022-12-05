"use client";

// ------------- library import -------------
import { MdAdd } from "react-icons/md";
// ------------- local import -------------
import Button from "./shared/Button";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  // ------------- FUNCTIONS -------------
  const openProductModal = () => {
    router.replace("/newProduct");
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
