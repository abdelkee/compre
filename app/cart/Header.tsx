import { use } from "react";
import { supabase } from "../../utils/initSupabase";
import { OrderType } from "../../types";
import HeaderContent from "./HeaderContent";
import { useUser } from "../../context/ContextHook";

const getOrders = async () => {
  const { data: orders, error } = await supabase.from("orders").select();
  return { orders, error };
};
const Header = () => {
  const { orders, error } = use(getOrders());
  if (error) throw error.message;
  if (orders === null || orders.length <= 0)
    return <div className="grid place-items-center pt-4">No orders yet !</div>;
  const prices: number[] = orders?.map((order: OrderType) => order.price);
  const quantities: number[] = orders?.map(
    (order: OrderType) => order.quantity
  );
  const totalPrice: number = parseFloat(
    prices?.reduce((sum, price) => sum + price, 0).toFixed(2)
  );
  const totalQuantity: number = quantities?.reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  return (
    <header className="header-style">
      <HeaderContent totalPrice={totalPrice} totalQuantity={totalQuantity} />
    </header>
  );
};

export default Header;
