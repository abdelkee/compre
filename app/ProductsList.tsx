import { use } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";
import { supabase } from "../utils/initSupabase";

function ProductsList() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {/* {products?.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      this is sparta
    </section>
  );
}

export default ProductsList;
