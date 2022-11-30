"use client";

import {
  MdAdd,
  MdAttachMoney,
  MdNoteAlt,
  MdRemove,
  MdSpellcheck,
} from "react-icons/md";
import { useState, useContext } from "react";
import Modal from "./shared/Modal";
import { useDispatch, useSelector } from "../context/ContextHook";
import { Actions } from "../context/ContextProvider";

function NewOrder() {
  const { isNewOrderOpen } = useSelector();
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const createOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: Actions.setNewOrderOpen, payload: false });
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const setIsNewOrderOpen = () => {
    dispatch({ type: Actions.setNewOrderOpen, payload: false });
  };
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
              value={"Roscas"}
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
              onChange={() => {}}
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
}

export default NewOrder;
