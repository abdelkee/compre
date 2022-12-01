import Header from "./Header";
import ProductsList from "./ProductsList";

function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <ProductsList />
      </main>
    </>
  );
}

export default HomePage;
