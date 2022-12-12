"use client";

import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "../../context/ContextHook";
import { ItemType } from "../../types";
import ItemPill from "./ItemPill";

function ItemsList() {
  //* ---- HOOKS
  const { revalidateItemPills } = useSelector().listContext;

  //* ---- STATES
  const [itemPills, setItemPills] = useState<ItemType[]>([]);

  useEffect(() => {
    const value = localStorage.getItem("itemPills");
    if (typeof value === "string") {
      const parse = JSON.parse(value);
      setItemPills(parse);
    } else {
      localStorage.setItem("itemPills", JSON.stringify([]));
    }
  }, [revalidateItemPills]);
  return (
    <>
      <section className="flex flex-wrap gap-4">
        {itemPills?.map((item: ItemType) => (
          <ItemPill key={item.id} item={item} />
        ))}
      </section>
      <Toaster />
    </>
  );
}

export default ItemsList;
