import { use } from "react";
import { ItemType } from "../../types";
import { supabase } from "../../utils/initSupabase";
import ItemPill from "./ItemPill";
export const dynamic = "force-dynamic";

async function getItems() {
  const { data: items, error } = await supabase
    .from("items")
    .select()
    .order("title");
  return { items, error };
}

function ItemsList() {
  const { items, error } = use(getItems());
  if (error) throw new Error("something went wrong");
  console.log("ITEMS", items);
  return (
    <section className="flex flex-wrap gap-4">
      {items?.map((item: ItemType) => (
        <ItemPill key={item.id} item={item} />
      ))}
    </section>
  );
}

export default ItemsList;
