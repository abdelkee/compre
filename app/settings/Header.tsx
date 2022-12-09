"use client";

import Link from "next/link";
import { useUser } from "../../context/ContextHook";
import { supabase } from "../../utils/initSupabase";
import { useRouter } from "next/navigation";

const Header = () => {
  const { session, user } = useUser();
  const router = useRouter();
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error.message;
    router.replace("/login");
  }
  return (
    <header className="header-style">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 rounded-full border border-purple-500 bg-white" />
        <p>Name</p>
      </div>
      {session === null ? (
        <Link href={"/login"} className="font-semibold text-green-600">
          Login
        </Link>
      ) : (
        <button className="font-semibold text-red-600" onClick={logout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
