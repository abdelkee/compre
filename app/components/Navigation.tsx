// library imports
import {
  MdShoppingBag,
  MdShoppingCart,
  MdFormatListBulleted,
  MdOutlineBarChart,
} from "react-icons/md";
import NavLink from "./NavLink";

// local imports

function Navigation() {
  return (
    <nav className="fixed bottom-0 flex items-center justify-around w-full bg-white border-t border-t-gray-400">
      <NavLink path="/">
        <MdShoppingBag size={"24px"} />
        <small>Productos</small>
      </NavLink>
      <NavLink path="/tienda">
        <MdShoppingCart size={"24px"} />
        <small>Tienda</small>
      </NavLink>
      <NavLink path="/lista">
        <MdFormatListBulleted size={"24px"} />
        <small>Lista</small>
      </NavLink>
      <NavLink path="/mercado">
        <MdOutlineBarChart size={"24px"} />
        <small>Mercado</small>
      </NavLink>
    </nav>
  );
}

export default Navigation;
