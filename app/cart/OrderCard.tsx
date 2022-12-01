"use client";

import Image from "next/image";
import { MdAddShoppingCart, MdModeEditOutline } from "react-icons/md";
import { OrderType } from "../../types";

function OrderCard({ order }: { order: OrderType }) {
  // ------------- FUNCTIONS -------------
  function openEditModal() {
    alert("edit modal opened");
  }
  // ------------- JSX -------------
  return (
    <div className="relative p-4 overflow-hidden bg-white border border-gray-300 rounded shadow-md">
      order
    </div>
  );
}

export default OrderCard;
