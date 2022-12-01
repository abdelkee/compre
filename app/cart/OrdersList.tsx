import { use } from "react";
import { OrderType } from "../../types";
import OrderCard from "./OrderCard";

const api = "https://fakestoreapi.com/carts";

async function getOrders() {
  const result = await fetch(api);
  const data = await result.json();
  return data;
}

function OrdersList() {
  const orders = use(getOrders());
  console.log(orders);
  return (
    <section className="grid grid-cols-1 gap-4">
      {orders?.map((order: OrderType) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </section>
  );
}

export default OrdersList;
