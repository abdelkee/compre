"use client";

// ------------- library import -------------
import { MdAdd } from "react-icons/md";
// ------------- local import -------------
import Button from "./shared/Button";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { useUser } from "../context/ContextHook";
import Link from "next/link";

function Header() {
  const { session, user } = useUser();
  const router = useRouter();
  if (session === null)
    return (
      <div>
        No session <Link href={"/login"}>SIGN IN</Link>
      </div>
    );
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
