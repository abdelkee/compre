import Header from "./Header";
import OrdersList from "./OrdersList";
export const revalidate = 0;

function CartPage() {
  return (
    <>
      <Header />
      <main>
        <OrdersList />
      </main>
    </>
  );
}

export default CartPage;
