"use client";
import Landing from "@/components/Landing";
import { createBrowserClient } from "@supabase/ssr";
import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const supabase = useMemo(() => {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
    );
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if(event === 'INITIAL_SESSION') {
        if(session) {
          setUser(session.user);
        }
        isFirstTime && setIsFirstTime(false);
      } else if(event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        setUser(session?.user)
      }
    });
  }, []);

  const value = useMemo(() => {
    return {
      user,
      logout: () => supabase.auth.signOut(),
    }
  }, [user])

  return (
    <AuthContext.Provider value={value}>
      {
        !isFirstTime ? (
          user ? 
          children : (
          <Landing />
          )
        ) : ''
      }
    </AuthContext.Provider>
  );
}

export default AuthProvider;