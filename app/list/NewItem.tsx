"use client";

import { MdAttachMoney, MdImage, MdSpellcheck } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "../../context/ContextHook";
import Modal from "../shared/Modal";
import { ItemType } from "../../types";
import { Actions } from "../../context/reducers/listReducer";

// ------ same page version ---------
const NewItemPage = () => {
  //* ---- HOOKS
  const router = useRouter();
  const { isItemFormOpen } = useSelector().listContext;

  const dispatch = useDispatch().ListContext;

  //* ---- STATES
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<ItemType["category"]>("Food");

  //* ---- FUNCTIONS
  function closeModal() {
    dispatch({ type: Actions.setIsItemFormOpen, payload: false });
  }
  function addItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //! todo before dispatch : add item to list in localstorage
    // dispatch({type: Actions.setIsItemFormOpen, payload: false})
  }

  //* ---- JSX
  return (
    <Modal
      title={"New item to buy"}
      onClose={closeModal}
      isOpen={isItemFormOpen}
    >
      <form
        onSubmit={addItem}
        className="flex flex-col items-center justify-between w-full h-full"
      >
        <div className="w-full space-y-6">
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
        </div>
        <button
          type="submit"
          className={`w-full py-3 font-semibold rounded bg-white`}
        >
          Add item
        </button>
      </form>
    </Modal>
  );
};

export default NewItemPage;
