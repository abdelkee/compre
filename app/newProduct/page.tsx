"use client";

import { MdAttachMoney, MdImage, MdSpellcheck } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "../../context/ContextHook";
import Modal from "../shared/Modal";
import { useRouter } from "next/navigation";

const NewProduct = () => {
  const router = useRouter();

  // ---- CONTEXT
  const { editMode, orderedProduct } = useSelector();

  // ---- STATES
  const [image, setImage] = useState(!editMode ? "" : orderedProduct?.image);
  const [title, setTitle] = useState(!editMode ? "" : orderedProduct?.title);
  const [price, setPrice] = useState(!editMode ? 0 : orderedProduct?.price);
  const closeModal = () => {
    router.back();
  };

  // ---- FUNCTIONS
  function createProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //! add product to db
    router.back();
  }
  function editProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //! update product in db
    router.back();
  }

  // ---- JSX
  return (
    <Modal
      title={!editMode ? "New product" : "Edit product"}
      onClose={closeModal}
    >
      <form
        onSubmit={!editMode ? createProduct : editProduct}
        className="flex flex-col items-center justify-between w-full h-full"
      >
        <div className="w-full space-y-6">
          {image ? (
            <div className="grid w-full place-items-center h-[100px]">
              <Image
                alt={title || ""}
                src={image}
                width={100}
                height={100}
                className="object-cover rounded-2xl ring-2 ring-white aspect-square"
              />
            </div>
          ) : (
            <label className="space-y-2 text-gray-400 w-full flex flex-col items-center justify-center border border-dashed border-gray-400 bg-transparent relative h-[100px] rounded-2xl">
              <MdImage size="24px" />
              <p>Product image</p>
              <input
                type="file"
                className="absolute invisible"
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files![0]))
                }
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
              className="input-field"
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
          className="w-full py-3 font-semibold text-green-600 bg-white rounded"
        >
          {!editMode ? "Create product" : "Update product"}
        </button>
      </form>
    </Modal>
  );
};

export default NewProduct;
