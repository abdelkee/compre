import NewOrderPage from "./NewOrder";
import NewProductPage from "./NewProduct";
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
      <NewProductPage />
      <NewOrderPage />
    </Wrapper>
  );
};

export default ProductsPage;
