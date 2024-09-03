import * as React from "react";
import { supabase } from "./supabaseClient";

export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user: Record<string, any> | null;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<Record<string, any> | null>(null);

  const isAuthenticated = !!user;

  const logout = React.useCallback(async () => {
    supabase.auth.signOut();
    setUser(null);
  }, []);

  const login = React.useCallback(
    async (username: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
      });
      if (error) {
        throw error;
      }
      setUser(data.user);
    },
    []
  );

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data, error }) => {
      if (error) {
        throw error;
      }
      setUser(data.user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
