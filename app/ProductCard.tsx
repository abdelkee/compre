"use client";

import Image from "next/image";
import {
  MdAddShoppingCart,
  MdClose,
  MdFileUpload,
  MdModeEditOutline,
  MdUpdate,
} from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "../context/ContextHook";
import { Actions } from "../context/reducers/productReducer";
import { ProductType } from "../types";
import Button from "./shared/Button";
import toast from "react-hot-toast";
import { supabase } from "../utils/initSupabase";

function ProductCard({ product }: { product: ProductType }) {
  //* ---- HOOKS
  const dispatch = useDispatch().productContext;

  //* ---- STATES
  const [quantity, setQuantity] = useState(1);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);

  //* ---- FUNCTIONS
  const openOrderModal = () => {
    dispatch({
      type: Actions.setOrderedProduct,
      payload: { product, quantity },
    });
    dispatch({ type: Actions.setIsOrderFormOpen, payload: true });
  };

  const toggleEditMode = () => {
    if (isEditMode) {
      setTitle(product.title);
      setPrice(product.price);
    }
    setIsEditMode(!isEditMode);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const updateProduct = async () => {
    if (title === product.title && price === product.price)
      return setIsEditMode(false);
    setLoading(true);
    try {
      if (title === "" || title.length < 3) {
        return toast.error("title must be more than 2 letters");
      } else if (price < 0 || isNaN(price)) {
        return toast.error("price must be a number");
      } else {
        const capTitle = title.charAt(0).toUpperCase() + title.slice(1);
        const { error } = await supabase
          .from("products")
          .update({ title: capTitle, price })
          .eq("id", product.id);
        if (error) return toast.error("error updating product");
        setIsEditMode(false);
      }
    } catch (error) {
      toast.error("error updating product");
    } finally {
      setLoading(false);
      dispatch({ type: Actions.setRevalidateProducts });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsEditMode(false);
    }
  };

  //* ---- JSX
  return (
    <div
      onBlur={(e) => handleBlur(e)}
      className={` relative z-10 overflow-hidden bg-white border ${
        isEditMode ? "border-green-400" : "border-gray-200"
      } rounded-md ${!isEditMode ? "shadow-md" : "shadow-lg"}`}
    >
      <Button
        shape="circle"
        execute={toggleEditMode}
        bg={isEditMode ? "bg-red-200 text-red-600" : "bg-gray-50 text-gray-400"}
      >
        {!isEditMode ? (
          <MdModeEditOutline size={"20px"} />
        ) : (
          <MdClose size={"20px"} />
        )}
      </Button>
      <section className="w-full h-[140px] overflow-hidden p-1 rounded-md bg-white">
        <Image
          alt={product.title}
          src={product.image}
          width="0"
          height="0"
          loading="lazy"
          placeholder="blur"
          blurDataURL="./blurPlaceholder.png"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      {/* //* ---- INFO SECTION */}
      <section className="w-full p-2 font-medium">
        {isEditMode ? (
          <input
            type="text"
            className={`truncate w-full focus:outline-none p-1 ${
              isEditMode && "bg-green-50"
            }`}
            onFocus={() => {
              dispatch({ type: Actions.setInputIsFocused, payload: true });
            }}
            onBlur={() => {
              dispatch({ type: Actions.setInputIsFocused, payload: false });
            }}
            value={title}
            readOnly={!isEditMode}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div className="p-1">{product.title}</div>
        )}
        {isEditMode ? (
          <input
            type="number"
            className={`truncate w-full focus:outline-none p-1 ${
              isEditMode && "bg-green-50 border-t border-t-green-200"
            }`}
            onFocus={() => {
              dispatch({ type: Actions.setInputIsFocused, payload: true });
            }}
            onBlur={() => {
              dispatch({ type: Actions.setInputIsFocused, payload: false });
            }}
            value={price}
            readOnly={!isEditMode}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
        ) : (
          <div className="p-1">{product.price}</div>
        )}
      </section>

      {/* //* ---- CTA SECTION  */}
      <section className="flex justify-between pl-2 mx-1 mb-1 border border-purple-100 rounded-md shadow-sm bg-purple-50">
        {!isEditMode ? (
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
        ) : (
          <p className="grid place-items-center text-purple-400">
            {loading ? "Updating..." : "Edit mode."}
          </p>
        )}
        <Button
          shape={"none"}
          execute={!isEditMode ? openOrderModal : updateProduct}
        >
          {!isEditMode ? (
            <MdAddShoppingCart size={"24px"} />
          ) : !loading ? (
            <MdUpdate size={"24px"} />
          ) : (
            <MdFileUpload className="text-purple-400" size={"24px"} />
          )}
        </Button>
      </section>
    </div>
  );
}

export default ProductCard;
