"use client";

import Image from "next/image";
import { MdAddShoppingCart, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "../context/ContextHook";
import { Actions } from "../context/ContextProvider";
import { ProductType } from "../types";
import Button from "./shared/Button";

function ProductCard({ product }: { product: ProductType }) {
  const dispatch = useDispatch();
  // ------------- FUNCTIONS -------------
  const openOrderModal = () => {
    dispatch({ type: Actions.setNewOrderOpen, payload: true });
  };
  const openEditModal = () => {};
  // ------------- JSX -------------
  return (
    <div className="relative overflow-hidden bg-white border border-gray-300 rounded shadow-md">
      <Button shape="circle" execute={openEditModal}>
        <MdModeEditOutline size={"20px"} />
      </Button>
      <div className="w-full h-[160px] overflow-hidden p-1">
        <Image
          alt={product.title}
          src={product.image}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="w-full p-2 font-medium">
        <p className="capitalize truncate">{product.title}</p>
        <p>$ {product.price}</p>
      </div>
      <Button shape={"long2"} execute={openOrderModal}>
        <MdAddShoppingCart size={"24px"} />
      </Button>
    </div>
  );
}

export default ProductCard;
