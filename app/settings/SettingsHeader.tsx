"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../context/ContextHook";
import { supabase } from "../../utils/initSupabase";
import Image from "next/image";

const SettingsHeader = () => {
  const router = useRouter();
  const { user } = useUser();
  const [profile, setProfile] = useState({
    username: "",
    avatar: "/placeholder.png",
  });

  useEffect(() => {
    supabase
      .from("profiles")
      .select("username, avatar")
      .eq("id", user?.id)
      .single()
      .then(({ data, error }) => {
        if (error) throw error.message;
        setProfile(data);
      });
  }, []);

  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error.message;
    router.replace("/login");
  }
  return (
    <header className="header-style">
      <div className="flex items-center space-x-2">
        <div className="w-12 h-12 overflow-hidden bg-white border-2 border-purple-500 rounded-full">
          <Image
            alt={profile.username}
            src={profile.avatar}
            width={48}
            height={48}
          />
        </div>
        <p className="font-semibold tracking-wider">{profile.username}</p>
      </div>
      <button className="font-semibold text-red-600" onClick={logout}>
        Logout
      </button>
    </header>
  );
};

export default SettingsHeader;
