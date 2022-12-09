import { useEffect, useState } from "react";
import { supabase } from "../utils/initSupabase";
import Header from "./Header";
import ProductsList from "./ProductsList";

export const revalidate = 0;

const ProductsPage = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <ProductsList />
      </main>
    </>
  );
};

export default ProductsPage;
