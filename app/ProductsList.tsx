import { use } from "react";
import { ProductType } from "../types";
import ProductCard from "./ProductCard";

const api = "https://fakestoreapi.com/products";

async function getProducts() {
  const result = await fetch(api);
  const data = await result.json();
  return data;
}

function ProductsList() {
  const products = use(getProducts());
  return (
    <section className="grid grid-cols-2 gap-4">
      {products?.map((product: ProductType) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
