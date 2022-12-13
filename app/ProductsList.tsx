"use client";

import { useEffect, useState } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";
import { supabase } from "../utils/initSupabase";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "../context/ContextHook";
import { Actions } from "../context/reducers/productReducer";

function ProductsList() {
  //* ---- HOOKS
  const { revalidateProducts } = useSelector().productContext;
  const dispatch = useDispatch().productContext;

  //* ---- STATES
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchedVal, setSearchedVal] = useState<string>("");

  useEffect(() => {
    supabase
      .from("products")
      .select()
      .order("title")
      .then(({ data, error }) => {
        if (error) throw error.message;
        setProducts(data);
      });
  }, [revalidateProducts]);

  //* ---- FUNCTIONS
  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchedVal.toLowerCase())
  );

  //* ---- JSX
  return (
    <>
      {/* //* ---- SEARCH SECTION */}
      <section
        className={`fixed z-30 w-3/4 top-3`}
        onFocus={() =>
          dispatch({ type: Actions.setInputIsFocused, payload: true })
        }
        onBlur={() =>
          dispatch({ type: Actions.setInputIsFocused, payload: false })
        }
      >
        <input
          type="Search"
          className="w-full h-full px-2 py-3 capitalize border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-indigo-300 focus:shadow-2xl"
          placeholder="Search..."
          onChange={(e) => setSearchedVal(e.target.value)}
        />
      </section>

      {/* //* ---- LIST SECTION */}
      <section className="grid grid-cols-2 gap-3">
        {filteredProducts?.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
      <Toaster />
    </>
  );
}

export default ProductsList;
