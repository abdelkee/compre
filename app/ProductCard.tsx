"use client";

import Image from "next/image";
import {
  MdAddShoppingCart,
  MdCameraAlt,
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
  const [image, setImage] = useState(product.image);
  const [file, setFile] = useState<File>();

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
      setImage(product.image);
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

  async function uploadImage() {
    const { data: fileSource, error } = await supabase.storage
      .from("products")
      .upload(("img" + file?.name) as string, file as File);
    if (error) throw new Error("error uploading image" + error.message);
    return fileSource;
  }

  async function getPublicUrl(path: string) {
    const {
      data: { publicUrl },
    } = supabase.storage.from("products").getPublicUrl(path);
    return publicUrl;
  }

  const updateImage = async () => {
    const { path } = await uploadImage();
    const publicUrl = await getPublicUrl(path);
    const { error } = await supabase
      .from("products")
      .update({ image: publicUrl })
      .eq("id", product.id);
    if (error) return toast.error("Error updating the image!");
    let url = product.image.split("/");
    await supabase.storage.from("products").remove(url[url.length - 1]);
  };

  const updateProduct = async () => {
    if (
      title === product.title &&
      price === product.price &&
      image === product.image
    )
      return setIsEditMode(false);
    setLoading(true);
    try {
      if (image !== product.image) {
        if (file?.type === "video/mp4") {
          return toast.error("file format not supported!");
        } else {
          await updateImage();
        }
      }

      if (title !== product.title || price !== product.price) {
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
        }
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
      // onBlur={(e) => handleBlur(e)}
      className={` relative z-10 overflow-hidden bg-white border ${
        isEditMode ? "border-green-400" : "border-gray-200"
      } rounded-md ${!isEditMode ? "shadow-md" : "shadow-lg"}`}
    >
      <section className="w-full h-[140px] overflow-hidden p-1 rounded-md bg-white grid place-items-center">
        <Image
          alt={title}
          src={image}
          width="0"
          height="0"
          loading="lazy"
          placeholder="blur"
          blurDataURL="./blurPlaceholder.png"
          sizes="100vw"
          style={{ width: "auto", height: "100%" }}
        />
      </section>
      {isEditMode && (
        <label className="absolute inset-0 w-full h-[140px] backdrop-brightness-50 text-white grid place-items-center">
          <MdCameraAlt size={"24px"} />
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="w-full h-full opacity-0 absolute"
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files![0]));
              setFile(e.target.files![0]);
            }}
          />
        </label>
      )}
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
