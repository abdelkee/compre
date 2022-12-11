"use client";

import { MdAttachMoney, MdNoteAlt, MdSpellcheck } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector, useUser } from "../context/ContextHook";
import Modal from "./shared/Modal";
import { supabase } from "../utils/initSupabase";
import { Actions } from "../context/reducers/productReducer";

const NewOrderPage = () => {
  //* ---- HOOKS
  const router = useRouter();
  const { user } = useUser();
  const { orderedProduct, isOrderFormOpen } = useSelector().productContext;
  const dispatch = useDispatch().productContext;

  //* ---- STATES
  const initPrice = orderedProduct?.product.price! * orderedProduct?.quantity!;
  const [price, setPrice] = useState<number>(parseFloat(initPrice.toFixed(2)));
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  //* --- FUNCTIONS
  async function createOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      await supabase.from("orders").insert({
        title: orderedProduct?.product.title,
        price,
        quantity: orderedProduct?.quantity,
        note,
        user_id: user?.id,
      });
      router.replace("/cart");
    } catch (error) {
      throw new Error("error creating order");
    } finally {
      setLoading(false);
      dispatch({ type: Actions.setIsOrderFormOpen, payload: false });
    }
  }
  function closeModal() {
    dispatch({ type: Actions.setIsOrderFormOpen, payload: false });
  }

  //* ---- JSX
  return (
    <Modal title="New Order" onClose={closeModal} isOpen={isOrderFormOpen}>
      <form
        onSubmit={createOrder}
        className="flex flex-col items-center justify-between w-full h-full"
      >
        <div className="w-full space-y-6">
          {/* ----------------- TITLE INPUT ------------------ */}
          <label className="relative flex items-center w-full px-2 space-x-4 text-gray-400 border-b border-b-gray-400">
            <MdSpellcheck size={"24px"} />
            <input
              type={"text"}
              readOnly
              value={orderedProduct?.product.title}
              className="w-full h-full py-3 text-white bg-transparent focus:outline-none"
            />
            <p className="absolute top-0 right-0 grid w-8 h-8 font-semibold text-white bg-orange-400 rounded-full place-items-center">
              {orderedProduct?.quantity}
            </p>
          </label>
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
              onChange={(e) => setNote(e.target.value)}
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 font-semibold ${
            loading ? "text-gray-600 bg-gray-300" : "text-green-600 bg-white"
          } rounded`}
        >
          {!loading ? "Make order" : "Submiting..."}
        </button>
      </form>
    </Modal>
  );
};

export default NewOrderPage;
