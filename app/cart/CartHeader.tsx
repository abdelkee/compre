"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../utils/initSupabase";
import HeaderContent from "./HeaderContent";

const CartHeader = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  useEffect(() => {
    async function getTotalPrice() {
      let { data, error } = await supabase.rpc("get_totalprice");
      if (error) throw error.message;
      if (typeof data !== "number") return;
      else setTotalPrice(data);
    }
    getTotalPrice();
  }, []);
  useEffect(() => {
    async function getTotalQuantity() {
      let { data, error } = await supabase.rpc("get_totalquantity");
      if (error) throw error.message;
      if (typeof data !== "number") return;
      else setTotalQuantity(data);
    }
    getTotalQuantity();
  }, []);

  return (
    <header className="header-style">
      <HeaderContent
        totalPrice={parseFloat(totalPrice.toFixed(2))}
        totalQuantity={totalQuantity}
      />
    </header>
  );
};

export default CartHeader;
