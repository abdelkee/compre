"use client";

import { OrderType } from "../../types";

function OrderCard({ order }: { order: OrderType }) {
  // ------------- FUNCTIONS -------------
  function deleteOrder() {
    if (confirm("Want to delete this order")) {
      alert("order deleted");
    }
  }
  // ------------- JSX -------------
  return (
    <div
      className="relative pr-2 overflow-hidden bg-white border border-pink-300 rounded shadow-md flex space-x-4"
      onClick={deleteOrder}
    >
      <div className="h-full w-1 bg-pink-300" />
      <div className="flex-1 py-3 flex justify-between items-center font-semibold">
        <div className="flex items-center space-x-4">
          <p>1</p>
          <div>
            <p>product name</p>
            <small className="text-gray-400">this is the note</small>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p>$ 2.3</p>
          <small className="text-gray-400">03/11/2022</small>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
