"use client";

import { MdAttachMoney, MdImage, MdSpellcheck } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "../../context/ContextHook";
import Modal from "../shared/Modal";
import { ItemType } from "../../types";
import { Actions } from "../../context/reducers/listReducer";
import toast from "react-hot-toast";

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
    const value = localStorage.getItem("itemPills");
    if (typeof value === "string") {
      const itemPills = JSON.parse(value);
      try {
        localStorage.setItem(
          "itemPills",
          JSON.stringify([
            ...itemPills,
            {
              id: new Date().getTime().toString(),
              title,
              category,
              checked: false,
            },
          ])
        );
        toast.success("Item added successfully!");
      } catch (error) {
        toast.error("error saving item..");
      } finally {
        dispatch({ type: Actions.setIsItemFormOpen, payload: false });
        document.body.style.overflow = "auto";
        dispatch({ type: Actions.setRevalidateItemPills });
      }
    }
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
        <div className="w-full space-y-10">
          {/* ---- TITLE INPUT */}
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

          {/* ---- CATEGORY RADIO INPUT */}
          <div className="w-full flex items-center justify-between">
            <CategoryRadio
              name={"Food"}
              val={category}
              setCategory={setCategory}
              url={"/food.jpg"}
            />
            <CategoryRadio
              name={"Cleaning"}
              setCategory={setCategory}
              val={category}
              url={"/cleaning.jpg"}
            />
            <CategoryRadio
              name={"Medicine"}
              setCategory={setCategory}
              val={category}
              url={"/medicine.jpg"}
            />
            <CategoryRadio
              name={"Other"}
              setCategory={setCategory}
              val={category}
              url={"/other.jpg"}
            />
          </div>
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

const CategoryRadio = ({
  name,
  setCategory,
  url,
  val,
}: {
  name: ItemType["category"];
  setCategory: Function;
  url: string;
  val: string;
}) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCategory(e.target.value);
  }
  return (
    <div className="flex flex-col space-y-2 items-center">
      <label
        className={`w-16 h-w-16 rounded border-4 bg-white overflow-hidden ${
          val === name ? "border-yellow-400" : "border-transparent"
        }`}
      >
        <div className="w-full h-full bg-white">
          <Image
            alt="food"
            src={url}
            width={68}
            height={68}
            className="rounded object-cover"
          />
        </div>
        <input
          className="hidden"
          type="radio"
          defaultChecked={val === name}
          name="category"
          id={name}
          defaultValue={name}
          onChange={(e) => handleChange(e)}
        />
      </label>
      <p
        className={`text-white font-semibold w-full text-center ${
          val === name
            ? "border-b-2 border-b-yellow-400"
            : "border-b-2 border-b-transparent"
        } `}
      >
        {name}
      </p>
    </div>
  );
};
