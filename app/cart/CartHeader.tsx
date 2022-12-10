"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/initSupabase";
import { OrderType } from "../../types";
import HeaderContent from "./HeaderContent";
import { useSelector, useUser } from "../../context/ContextHook";

const CartHeader = () => {
  const [totalPrice, setTotalPrice] = useState(12.2);
  const [totalQuantity, setTotalQuantity] = useState(4);
  // useEffect(() => {
  //   supabase.rpc("get_priceSum").then((res) => {
  //     console.log(res);
  //   });
  // }, []);
  //     if (orders === null || orders.length <= 0)
  //       return (
  //         <div className="grid pt-4 place-items-center">No orders yet !</div>
  //       );
  //     const prices: number[] = orders?.map((order: OrderType) => order.price);
  //     const quantities: number[] = orders?.map(
  //       (order: OrderType) => order.quantity
  //     );
  //     const totalPrice: number = parseFloat(
  //       prices?.reduce((sum, price) => sum + price, 0).toFixed(2)
  //     );
  //     const totalQuantity: number = quantities?.reduce(
  //       (sum, quantity) => sum + quantity,
  //       0
  //     );
  //     setOrdersResume({
  //       totalPrice,
  //       totalQuantity,
  //     });
  //   });

  return (
    <header className="header-style">
      <HeaderContent totalPrice={totalPrice} totalQuantity={totalQuantity} />
    </header>
  );
};

export default CartHeader;
