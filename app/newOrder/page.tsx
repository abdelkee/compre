"use client";

import {
  MdAdd,
  MdAttachMoney,
  MdNoteAlt,
  MdRemove,
  MdSpellcheck,
} from "react-icons/md";
import { useState } from "react";
import { useDispatch, useSelector } from "../../context/ContextHook";
import { Actions } from "../../context/ContextProvider";
import Modal from "../shared/Modal";
import { useRouter } from "next/navigation";

const NewOrder = () => {
  const router = useRouter();
  // ---- CONTEXT
  const { isNewOrderOpen, orderedProduct } = useSelector();
  const dispatch = useDispatch();

  // ---- STATES
  const [price, setPrice] = useState(orderedProduct?.price);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  // --- FUNCTIONS
  function createOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //! add product to db
    router.back();
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }
  function increment() {
    setQuantity((prev) => prev + 1);
  }
  function setIsNewOrderOpen() {
    router.back();
  }

  // ---- JSX
  return (
    <Modal
      title="New Order"
      isOpen={isNewOrderOpen}
      onClose={setIsNewOrderOpen}
    >
      <form
        onSubmit={createOrder}
        className="flex flex-col items-center justify-between w-full h-full"
      >
        <div className="w-full space-y-6">
          {/* ----------------- TITLE INPUT ------------------ */}
          <label className="flex items-center w-full px-2 space-x-4 text-gray-400 border-b border-b-gray-400">
            <MdSpellcheck size={"24px"} />
            <input
              type={"text"}
              readOnly
              value={orderedProduct?.title}
              className="w-full h-full py-3 text-white bg-transparent focus:outline-none"
            />
          </label>
          {/* ----------------- QUANTITY ------------------ */}
          <div className="flex items-center justify-center space-x-6 text-white">
            <button
              type="button"
              className="grid w-8 h-8 text-lg font-semibold rounded-full place-items-center"
              onClick={() => decrement()}
            >
              <MdRemove size="24px" />
            </button>
            <p className="text-xl font-semibold">{quantity}</p>
            <button
              type="button"
              className="grid w-8 h-8 text-lg font-semibold rounded-full place-items-center"
              onClick={() => increment()}
            >
              <MdAdd size="24px" />
            </button>
          </div>
          {/* ----------------- PRICE INPUT ------------------ */}
          <label className="input-label">
            <MdAttachMoney size={"24px"} />
            <input
              required
              type="number"
              value={price}
              placeholder="Price..."
              className="input-field"
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </label>
          {/* ----------------- NOTE INPUT ------------------ */}
          <label className="input-label">
            <MdNoteAlt size={"24px"} />
            <input
              type="text"
              placeholder="Note..."
              className="input-field"
              onChange={() => {}}
            />
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-3 font-semibold text-green-600 bg-white rounded"
        >
          Make order
        </button>
      </form>
    </Modal>
  );
};

export default NewOrder;
