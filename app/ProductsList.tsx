"use client";

import { useEffect, useState } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";
import { supabase } from "../utils/initSupabase";
import { Toaster } from "react-hot-toast";
import { useSelector } from "../context/ContextHook";

function ProductsList() {
  //* ---- HOOKS
  const { revalidateProducts } = useSelector().productContext;

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
      <section className="fixed z-30 w-3/4 top-3">
        <input
          type="text"
          className="w-full h-full px-2 py-3 capitalize border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Search..."
          onChange={(e) => setSearchedVal(e.target.value)}
        />
      </section>
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
