"use client";

import {
  MdShoppingBag,
  MdShoppingCart,
  MdFormatListBulleted,
  MdOutlineBarChart,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import { useSelector, useUser } from "../../context/ContextHook";
import NavLink from "./NavLink";

function Navigation() {
  const path = usePathname();
  const { session } = useUser();
  const { searchIsFocused } = useSelector().productContext;
  if (session === null) return null;
  if (path === "/login") return null;
  return (
    <>
      {!searchIsFocused && (
        <nav className="fixed bottom-0 z-40 flex items-center justify-around w-full max-w-md bg-white border-t border-t-gray-400">
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
      )}
    </>
  );
}

export default Navigation;
