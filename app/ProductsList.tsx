import { use, useState } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";
import { supabase } from "../utils/initSupabase";

// async function getProducts() {
//   const { data: products, error } = await supabase
//     .from("products")
//     .select()
//     .order("title");
//   return { products, error };
// }

function ProductsList() {
  // const { products, error } = use(getProducts());
  // const [products, setProducts] = useState<ProductType[]>([]);
  // supabase
  //   .from("products")
  //   .select()
  //   .order("title")
  //   .then(({ data: products, error }) => {
  //     if (error) throw new Error("error getting products");
  //     setProducts(products);
  //   });
  return (
    <section className="grid grid-cols-2 gap-2">
      {/* {products?.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </section>
  );
}

export default ProductsList;
