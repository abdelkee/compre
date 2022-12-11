"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ItemType } from "../../types";

const ItemPill = ({ item }: { item: ItemType }) => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
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
    setChecked((prev) => !prev);
  }
  return (
    <div
      onClick={toggleItem}
      className={`${
        checked
          ? "line-through shadow-none text-gray-500 bg-gray-100 border border-gray-300"
          : `shadow-sm bg-white ${categorySelect()}`
      } py-2 grid place-items-center px-4 rounded-full font-semibold cursor-pointer`}
    >
      {item.title}
    </div>
  );
};

export default ItemPill;
