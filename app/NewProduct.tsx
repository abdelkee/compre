"use client";

import { MdAttachMoney, MdImage, MdSpellcheck } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import Modal from "./shared/Modal";
import { useDispatch, useSelector } from "../context/ContextHook";
import { Actions } from "../context/ContextProvider";

function NewProduct({ editMode = false }) {
  const { isNewProductOpen } = useSelector();
  const dispatch = useDispatch();

  const [image, setImage] = useState(!editMode ? "" : "");
  const [title, setTitle] = useState(!editMode ? "" : "");
  const [price, setPrice] = useState(!editMode ? 0 : 3);
  const closeModal = () => {
    dispatch({ type: Actions.setNewProductOpen, payload: false });
  };
  const createProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: Actions.setNewProductOpen, payload: false });
  };
  const editProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: Actions.setNewProductOpen, payload: false });
  };
  return (
    <Modal
      title={!editMode ? "New product" : "Edit product"}
      isOpen={isNewProductOpen}
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
                alt={title}
                src={image}
                width={100}
                height={100}
                className="rounded-2xl ring-2 ring-white"
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
}

export default NewProduct;
