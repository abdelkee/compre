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
    <nav className="fixed bottom-0 flex items-center justify-around w-full max-w-md bg-white border-t border-t-gray-400">
      <NavLink path="/">
        <MdShoppingBag size={"24px"} />
        <small>Productos</small>
      </NavLink>
      <NavLink path="/cart">
        <MdShoppingCart size={"24px"} />
        <small>Cart</small>
      </NavLink>
      <NavLink path="/list">
        <MdFormatListBulleted size={"24px"} />
        <small>Lista</small>
      </NavLink>
      <NavLink path="/settings">
        <MdOutlineBarChart size={"24px"} />
        <small>Settings</small>
      </NavLink>
    </nav>
  );
}

export default Navigation;
