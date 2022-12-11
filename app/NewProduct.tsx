"use client";

import { MdAttachMoney, MdImage, MdSpellcheck } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useDispatch, useSelector, useUser } from "../context/ContextHook";
import Modal from "./shared/Modal";
import { supabase } from "../utils/initSupabase";
import { Actions } from "../context/reducers/productReducer";
import Wrapper from "./shared/Wrapper";

// ------ same page version ---------
const NewProductPage = () => {
  //* ---- HOOKS
  const router = useRouter();
  const { editMode, orderedProduct, isProductFormOpen } =
    useSelector().productContext;
  const dispatch = useDispatch().productContext;

  //* ---- STATES
  const [image, setImage] = useState<string | undefined>(
    !editMode ? "" : orderedProduct?.product.image
  );
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState<string | undefined>(
    !editMode ? "" : orderedProduct?.product.title
  );
  const [price, setPrice] = useState<number | undefined>(
    !editMode ? 0 : orderedProduct?.product.price
  );
  const [loading, setLoading] = useState(false);

  //* ---- FUNCTIONS
  function closeModal() {
    dispatch({ type: Actions.setEditMode, payload: false });
    dispatch({ type: Actions.setIsProductFormOpen, payload: false });
  }
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
  async function insertProduct(publicUrl: string) {
    const { error } = await supabase.from("products").insert([
      {
        title,
        price,
        image: publicUrl,
      },
    ]);
    if (error) throw new Error("error creating product " + error.message);
  }
  async function createProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const { path } = await uploadImage();
    if (path) {
      const publicUrl = await getPublicUrl(path);
      await insertProduct(publicUrl);
      setLoading(false);
      router.replace("/");
      dispatch({ type: Actions.setIsProductFormOpen, payload: false });
    }
  }
  async function updateProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { error } = await supabase
      .from("products")
      .update({ title, price })
      .eq("id", orderedProduct?.product.id);
    if (error) throw new Error("error updating product");
    router.replace("/");
    dispatch({ type: Actions.setEditMode, payload: false });
    dispatch({ type: Actions.setIsProductFormOpen, payload: false });
  }

  //* ---- JSX
  return (
    <Modal
      title={!editMode ? "New product" : "Edit product"}
      onClose={closeModal}
      isOpen={isProductFormOpen}
    >
      <form
        onSubmit={!editMode ? createProduct : updateProduct}
        className="flex flex-col items-center justify-between w-full h-full"
      >
        <div className="w-full space-y-6">
          {image ? (
            <label className="grid w-full place-items-center h-[100px]">
              <Image
                alt={title || ""}
                src={image}
                width={100}
                height={100}
                className="object-cover rounded-2xl ring-2 ring-white aspect-square"
              />
              <input
                readOnly={editMode}
                disabled={editMode}
                type="file"
                className="absolute invisible"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files![0]));
                  setFile(e.target.files![0]);
                }}
              />
            </label>
          ) : (
            <label className="space-y-2 text-gray-400 w-full flex flex-col items-center justify-center border border-dashed border-gray-400 bg-transparent relative h-[100px] rounded-2xl">
              <MdImage size="24px" />
              <p>Product image</p>
              <input
                readOnly={editMode}
                disabled={editMode}
                type="file"
                className="absolute invisible"
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files![0]));
                  setFile(e.target.files![0]);
                }}
              />
            </label>
          )}
          <label className="input-label">
            <MdSpellcheck size={"24px"} />
            <input
              required
              type="text"
              value={title}
              placeholder="Title..."
              className="capitalize input-field"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="input-label">
            <MdAttachMoney size={"24px"} />
            <input
              required
              type="number"
              value={price}
              placeholder="Price..."
              className="input-field"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 font-semibold rounded ${
            loading ? "text-gray-600 bg-gray-300" : "text-green-600 bg-white"
          }`}
        >
          {!loading
            ? !editMode
              ? "Create product"
              : "Update product"
            : "Submitting..."}
        </button>
      </form>
    </Modal>
  );
};

export default NewProductPage;
