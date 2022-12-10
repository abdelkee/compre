import Wrapper from "../shared/Wrapper";
import ItemsList from "./ItemsList";
import ListHeader from "./ListHeader";

function ListPage() {
  return (
    <Wrapper>
      <ListHeader />
      <main>
        <ItemsList />
      </main>
    </Wrapper>
  );
}

export default ListPage;
