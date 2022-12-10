"use client";

import { useEffect, useState } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";
import { supabase } from "../utils/initSupabase";

function ProductsList() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    supabase
      .from("products")
      .select()
      .then(({ data, error }) => {
        if (error) throw error.message;
        setProducts(data);
      });
  }, []);
  return (
    <section className="grid grid-cols-2 gap-2">
      {products?.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
