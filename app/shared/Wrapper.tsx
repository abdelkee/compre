"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { useUser } from "../../context/ContextHook";

function Wrapper({ children }: { children: ReactNode }) {
  const { session } = useUser();
  if (session === null)
    return (
      <main className="grid font-semibold text-purple-700 place-items-center">
        <Link
          href={"/login"}
          className="px-6 py-3 bg-white border border-purple-700 rounded shadow-md active:opacity-70 active:shadow-none"
        >
          SIGN IN
        </Link>
      </main>
    );
  return <>{children}</>;
}

export default Wrapper;
