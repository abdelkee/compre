import Wrapper from "../shared/Wrapper";
import ItemsList from "./ItemsList";
import ListHeader from "./ListHeader";
import NewItemPage from "./NewItem";
export const revalidate = 0;

function ListPage() {
  return (
    <Wrapper>
      <ListHeader />
      <main>
        <ItemsList />
      </main>
      <NewItemPage />
    </Wrapper>
  );
}

export default ListPage;
