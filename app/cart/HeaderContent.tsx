"use client";

import { MdPayments } from "react-icons/md";
import { useUser } from "../../context/ContextHook";
import Button from "../shared/Button";

const HeaderContent = ({ totalPrice = 0, totalQuantity = 0.0 }) => {
  function makePayment() {
    if (confirm("Make the payment?")) {
      alert("payment made successfully");
    }
  }
  return (
    <>
      <div className="grid w-10 h-10 font-semibold text-purple-800 rotate-45 border border-purple-300 rounded-sm place-items-center">
        <p className="-rotate-45">{totalQuantity}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold text-green-900">$ {totalPrice}</p>
        <Button
          shape={"square"}
          execute={makePayment}
          disabled={totalPrice <= 0}
        >
          <MdPayments size={"24px"} />
        </Button>
      </div>
    </>
  );
};

export default HeaderContent;
