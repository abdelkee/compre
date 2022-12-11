"use client";

import { MdAdd } from "react-icons/md";
import { useRouter } from "next/navigation";
import Button from "./shared/Button";
import { useDispatch } from "../context/ContextHook";
import { Actions } from "../context/reducers/productReducer";

const ProductsHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch().productContext;
  //* ---- FUNCTIONS
  function openProductModal() {
    // router.replace("/newProduct");
    dispatch({ type: Actions.setIsProductFormOpen, payload: true });
  }
  //* ---- JSX
  return (
    <header className="flex-row-reverse header-style">
      <Button shape="square" execute={openProductModal}>
        <MdAdd size={"24px"} />
      </Button>
    </header>
  );
};

export default ProductsHeader;
