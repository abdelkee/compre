"use client";

// ------------- library import -------------
import { MdAdd } from "react-icons/md";
// ------------- local import -------------
import Button from "./shared/Button";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { useUser } from "../context/ContextHook";
import Link from "next/link";
import { supabase } from "../utils/initSupabase";

function ProductsHeader() {
  const router = useRouter();
  // const { session } = useUser();
  // ------------- FUNCTIONS -------------
  const openProductModal = () => {
    router.replace("/newProduct");
  };
  // ------------- JSX -------------
  return (
    <header className="flex-row-reverse header-style">
      <Button shape="square" execute={openProductModal}>
        <MdAdd size={"24px"} />
      </Button>
    </header>
  );
}

export default ProductsHeader;
