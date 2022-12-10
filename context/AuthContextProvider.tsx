"use client";

import { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useTransition,
} from "react";
import { supabase } from "../utils/initSupabase";

export const AuthContext = createContext<{
  user: User | null;
  session: Session | null;
}>({ user: null, session: null });

export default function AuthContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      startTransition(() => {
        setSession(session);
      });
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("CONTEXT EVENT !!", event);
      startTransition(() => {
        setSession(session);
      });
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe;
    };
  }, []);

  const value = {
    session,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
