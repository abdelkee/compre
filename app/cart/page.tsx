import Header from "./Header";
import OrdersList from "./OrdersList";

function page() {
  return (
    <>
      <Header />
      <main>
        <OrdersList />
      </main>
    </>
  );
}

export default page;
