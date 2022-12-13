"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ItemType } from "../../types";
import { Actions } from "../../context/reducers/listReducer";
import { useDispatch } from "../../context/ContextHook";

const ItemPill = ({ item }: { item: ItemType }) => {
  //* ---- HOOKS
  const dispatch = useDispatch().ListContext;

  //* ---- FUNCTIONS
  function categorySelect() {
    switch (item.category) {
      case "Food":
        return "border border-green-500 text-green-700";
      case "Cleaning":
        return "border border-orange-500 text-orange-700";
      case "Medicine":
        return "border border-blue-500 text-blue-700";
      default:
        return "border border-purple-500 text-purple-700";
    }
  }
  async function toggleItem() {
    const result = localStorage.getItem("itemPills");
    if (typeof result === "string") {
      let pills = JSON.parse(result);
      const updatedPills = pills.map((pill: ItemType) => {
        if (pill.id === item.id) {
          return { ...pill, checked: !item.checked };
        }
        return pill;
      });
      localStorage.setItem("itemPills", JSON.stringify(updatedPills));
      dispatch({ type: Actions.setRevalidateItemPills });
    }
  }
  return (
    <div
      onClick={toggleItem}
      className={`${
        item.checked
          ? "line-through shadow-none text-gray-500 bg-gray-100 border border-gray-300"
          : `shadow-sm bg-white ${categorySelect()}`
      } py-2 grid place-items-center px-4 rounded-full font-semibold cursor-pointer`}
    >
      {item.title}
      {/* <p>-</p> */}
    </div>
  );
};

export default ItemPill;
