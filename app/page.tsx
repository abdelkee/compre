import Header from "./Header";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";

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
