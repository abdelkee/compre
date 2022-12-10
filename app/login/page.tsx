"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "../../context/ContextHook";
import { supabase } from "../../utils/initSupabase";

const Login = () => {
  const router = useRouter();
  const { session } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return alert(error.message);
    router.push("/");
    setLoading(false);
  }

  if (session !== null)
    return (
      <main className="grid font-semibold text-green-700 place-items-center">
        <Link
          href={"/"}
          className="px-6 py-3 bg-white border border-green-700 rounded shadow-md active:opacity-70 active:shadow-none"
        >
          GO TO HOMEPAGE
        </Link>
      </main>
    );

  return (
    <main>
      <form
        onSubmit={login}
        className="flex flex-col items-center justify-center p-4 space-y-4 bg-purple-900 rounded shadow-md"
      >
        <label className="input-label">
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="input-field"
            placeholder="Email..."
          />
        </label>
        <label className="input-label">
          <input
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="input-field"
            placeholder="Password..."
          />
        </label>
        <button
          type="submit"
          className={`font-semibold text-white ${loading && "opacity-50"}`}
        >
          {!loading ? "Login" : "Sending..."}
        </button>
      </form>
    </main>
  );
};

export default Login;
