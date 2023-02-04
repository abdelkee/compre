"use client";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useSelector } from "../../context/ContextHook";
import { OrderType } from "../../types";
import { supabase } from "../../utils/initSupabase";
import OrderCard from "./OrderCard";

function OrdersList() {
  const { revalidateOrders } = useSelector().productContext;
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    supabase
      .from("orders")
      .select()
      .order("created_at")
      .then(({ data, error }) => {
        if (error) throw error.message;
        setOrders(data);
      });
  }, [revalidateOrders]);
  return (
    <>
      <Toaster key={"cart"} />
      <section className="grid grid-cols-1 gap-4">
        {orders?.map((order: OrderType) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </section>
    </>
  );
}

export default OrdersList;
