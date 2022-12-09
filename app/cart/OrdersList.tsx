import { use } from "react";
import { OrderType } from "../../types";
import { supabase } from "../../utils/initSupabase";
import OrderCard from "./OrderCard";

async function getOrders() {
  const { data, error } = await supabase.from("orders").select();
  return { data, error };
}

function OrdersList() {
  const { data: orders, error } = use(getOrders());
  if (error) throw new Error("error getting orders");
  return (
    <section className="grid grid-cols-1 gap-4">
      {orders?.map((order: OrderType) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </section>
  );
}

export default OrdersList;
