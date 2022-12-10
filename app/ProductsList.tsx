"use client";

import { useEffect, useState } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";
import { supabase } from "../utils/initSupabase";

function ProductsList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchedVal, setSearchedVal] = useState<string>("");
  useEffect(() => {
    supabase
      .from("products")
      .select()
      .then(({ data, error }) => {
        if (error) throw error.message;
        setProducts(data);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchedVal.toLowerCase())
  );
  return (
    <>
      <section className="fixed z-50 w-3/4 top-3">
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
    </>
  );
}

export default ProductsList;
