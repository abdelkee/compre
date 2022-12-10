import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "../context/ContextHook";
import { supabase } from "../utils/initSupabase";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";
import Wrapper from "./shared/Wrapper";

export const revalidate = 0;

const ProductsPage = () => {
  return (
    <Wrapper>
      <ProductsHeader />
      <main className="relative">
        <ProductsList />
      </main>
    </Wrapper>
  );
};

export default ProductsPage;
