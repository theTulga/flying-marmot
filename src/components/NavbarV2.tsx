import { HomeIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";

export default function NavigationMenuDemo() {
  const location = useLocation();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  console.log("session", session);
  return (
    <div className="w-full p-4">
      <div className="w-full flex justify-between">
        <div className="flex space-x-4">
          <Link
            className={`text-lg ${location.pathname === "/" ? "font-bold" : ""}`}
            to="/"
          >
            <HomeIcon className="w-6 h-6" />
          </Link>
          <Link
            className={`text-lg ${location.pathname === "/businesses" ? "font-bold" : ""}`}
            to="/businesses"
          >
            Businesses
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            className={`text-lg ${location.pathname === "/businesses/create" ? "font-bold" : ""}`}
            to="/businesses/create"
          >
            Create
          </Link>
          {session ? (
            <span className="text-lg">{session.user?.email}</span>
          ) : (
            <Link
              className={`text-lg ${location.pathname === "/auth" ? "font-bold" : ""}`}
              to="/auth"
            >
              Login / Sign Up
            </Link>
          )}

          {session && (
            <Button
              onClick={async () => {
                await supabase.auth.signOut();
                setSession(null);
              }}
              variant="outline"
              size="sm"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
