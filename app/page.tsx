import Header from "./Header";
import NewOrder from "./NewOrder";
import NewProduct from "./NewProduct";
import ProductsList from "./ProductsList";

function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <ProductsList />
        <NewProduct />
        <NewOrder />
      </main>
    </>
  );
}

export default HomePage;
