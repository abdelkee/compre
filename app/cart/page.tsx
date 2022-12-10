import Wrapper from "../shared/Wrapper";
import CartHeader from "./CartHeader";
import OrdersList from "./OrdersList";
export const revalidate = 0;

function CartPage() {
  return (
    <Wrapper>
      <CartHeader />
      <main>
        <OrdersList />
      </main>
    </Wrapper>
  );
}

export default CartPage;
