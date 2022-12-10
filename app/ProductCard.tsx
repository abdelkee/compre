"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdAddShoppingCart, MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "../context/ContextHook";
import { Actions } from "../context/reducers/productReducer";
import { ProductType } from "../types";
import Button from "./shared/Button";

function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();
  const dispatch = useDispatch().productContext;
  const [quantity, setQuantity] = useState(1);
  // ------------- FUNCTIONS -------------
  const openOrderModal = () => {
    dispatch({
      type: Actions.setOrderedProduct,
      payload: { product, quantity },
    });
    router.push("/newOrder");
  };
  const openEditModal = () => {
    dispatch({
      type: Actions.setOrderedProduct,
      payload: { product, quantity },
    });
    dispatch({ type: Actions.setEditMode, payload: true });
    router.push("/newProduct");
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  // ------------- JSX -------------
  return (
    <div className="relative overflow-hidden bg-white border border-gray-200 rounded-md shadow-md">
      <Button shape="circle" execute={openEditModal}>
        <MdModeEditOutline size={"20px"} />
      </Button>
      <section className="w-full h-[140px] overflow-hidden p-1 rounded-md">
        <Image
          alt={product.title}
          src={product.image}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>
      <section className="w-full p-2 font-medium">
        <p className="capitalize truncate">{product.title}</p>
        <p>$ {product.price}</p>
      </section>
      <section className="flex justify-between pl-1 mx-1 mb-2 bg-purple-600 rounded-full shadow-sm">
        <div className="flex items-center font-semibold text-white">
          <button
            className="grid w-8 h-8 bg-purple-300 rounded-full place-items-center"
            onClick={decrement}
          >
            -
          </button>
          <p className="grid w-8 h-8 text-center rounded-full place-items-center">
            {quantity}
          </p>
          <button
            className="grid w-8 h-8 bg-purple-300 rounded-full place-items-center"
            onClick={increment}
          >
            +
          </button>
        </div>
        <Button shape={"none"} execute={openOrderModal}>
          <MdAddShoppingCart size={"24px"} />
        </Button>
      </section>
    </div>
  );
}

export default ProductCard;
