"use client";

import { useEffect, useState } from "react";
import { OrderType } from "../../types";
import { supabase } from "../../utils/initSupabase";
import OrderCard from "./OrderCard";

function OrdersList() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  useEffect(() => {
    supabase
      .from("orders")
      .select()
      .then(({ data, error }) => {
        if (error) throw new Error("error getting orders");
        setOrders(data);
      });
  }, []);
  return (
    <section className="grid grid-cols-1 gap-4">
      {orders?.map((order: OrderType) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </section>
  );
}

export default OrdersList;
