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
    <div className="relative z-10 overflow-hidden bg-white border border-gray-200 rounded-md shadow-md">
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
      <section className="flex justify-between pl-2 mx-1 mb-1 border border-purple-100 rounded-md shadow-sm bg-purple-50">
        <div className="flex items-center font-semibold text-purple-800 text-md">
          <button
            className="grid w-8 h-8 border rounded-full place-items-center broder-purple-100"
            onClick={decrement}
          >
            -
          </button>
          <p className="grid w-8 h-8 text-center text-purple-800 rounded-full place-items-center">
            {quantity}
          </p>
          <button
            className="grid w-8 h-8 border rounded-full place-items-center broder-purple-100"
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
