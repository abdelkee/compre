"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  path: string;
};

function NavLink({ children, path }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <li
      className={`py-3 list-none bg-inherit flex-1 grid place-items-center ${
        path === pathname
          ? "text-green-600 border-t-2 border-t-green-600"
          : "text-gray-300"
      }`}
    >
      <Link href={path} className="grid place-items-center">
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
