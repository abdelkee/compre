"use client";
import Link from "next/link";
import { ReactNode, useState, useEffect } from "react";
import { useUser } from "../../context/ContextHook";
import Loading from "../Loading";

function Wrapper({ children }: { children: ReactNode }) {
  const { session } = useUser();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-screen ">
        <div className="lds-heart">
          <div></div>
        </div>
      </div>
    );
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
