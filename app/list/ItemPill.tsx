"use client";

import { useRouter } from "next/navigation";
import { ItemType } from "../../types";
import { supabase } from "../../utils/initSupabase";

const ItemPill = ({ item }: { item: ItemType }) => {
  const router = useRouter();
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
    const { data, error } = await supabase
      .from("items")
      .update({ isChecked: !item.isChecked })
      .eq("id", item.id)
      .select();
    if (error) return alert("error");
    if (data) {
      router.refresh();
    }
  }
  return (
    <div
      onClick={toggleItem}
      className={`${categorySelect()} ${
        item.isChecked
          ? "line-through shadow-none border border-gray-300 text-gray-500 bg-gray-300"
          : "shadow-sm bg-white"
      } py-2 grid place-items-center px-4 rounded-full font-semibold cursor-pointer`}
    >
      {item.title}
    </div>
  );
};

export default ItemPill;
