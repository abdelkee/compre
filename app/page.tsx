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
