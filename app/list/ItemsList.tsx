import { use } from "react";
import { ItemType } from "../../types";
import { supabase } from "../../utils/initSupabase";
import ItemPill from "./ItemPill";
export const dynamic = "force-dynamic";

function ItemsList() {
  return (
    <section className="flex flex-wrap gap-4">
      {/* {items?.map((item: ItemType) => (
        <ItemPill key={item.id} item={item} />
      ))} */}
    </section>
  );
}

export default ItemsList;
