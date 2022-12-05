import Header from "./Header";
import ProductsList from "./ProductsList";

export const revalidate = 0;

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
