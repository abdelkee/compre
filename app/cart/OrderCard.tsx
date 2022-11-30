"use client";

import Image from "next/image";
import { MdAddShoppingCart, MdModeEditOutline } from "react-icons/md";
import { OrderType } from "../../types";

function OrderCard({ order }: { order: OrderType }) {
  // ------------- FUNCTIONS -------------
  const openOrderModal = () => {
    alert("order modal opened");
  };
  const openEditModal = () => {
    alert("edit modal opened");
  };
  // ------------- JSX -------------
  return (
    <div className="overflow-hidden bg-white border border-gray-300 rounded shadow-md relative p-4">
      order
    </div>
  );
}

export default OrderCard;
