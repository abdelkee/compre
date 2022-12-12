"use client";

import toast from "react-hot-toast";
import { useDispatch, useUser } from "../../context/ContextHook";
import { Actions } from "../../context/reducers/productReducer";
import { OrderType } from "../../types";
import { supabase } from "../../utils/initSupabase";

const OrderCard = ({ order }: { order: OrderType }) => {
  const { user } = useUser();
  const dispatch = useDispatch().productContext;
  // ------------- FUNCTIONS -------------
  async function deleteOrder() {
    if (confirm("Want to delete this order")) {
      const { error } = await supabase
        .from("orders")
        .delete()
        .eq("id", order.id)
        .eq("user_id", user?.id);
      if (error) return toast.error(error.message);
      toast.success("order deleted successfully");
      dispatch({ type: Actions.setRevalidateOrders });
    }
  }
  // ------------- JSX -------------
  return (
    <div
      className="relative flex px-3 space-x-4 overflow-hidden bg-white border border-l-4 border-indigo-500 rounded shadow-md border-l-indigo-500"
      onClick={deleteOrder}
    >
      <div className="flex items-center justify-between flex-1 py-3 font-semibold">
        <div className="flex items-center space-x-4">
          <p>{order.quantity}</p>
          <div>
            <p>{order.title}</p>
            <small className="text-gray-400">{order.note}</small>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <p>$ {order.price}</p>
          <small className="text-gray-400">
            {new Date(order.created_at).toLocaleDateString()}
          </small>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
