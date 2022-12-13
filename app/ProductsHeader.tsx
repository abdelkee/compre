"use client";

import { MdAdd } from "react-icons/md";
import Button from "./shared/Button";
import { useDispatch } from "../context/ContextHook";
import { Actions } from "../context/reducers/productReducer";

const ProductsHeader = () => {
  const dispatch = useDispatch().productContext;
  //* ---- FUNCTIONS
  function openProductModal() {
    const initProduct = { id: "", title: "", price: 0, image: "" };
    // dispatch({
    //   type: Actions.setOrderedProduct,
    //   payload: { product: initProduct, quantity: 1 },
    // });
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
