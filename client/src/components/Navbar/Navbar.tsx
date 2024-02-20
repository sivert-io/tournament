"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useSteam } from "@/hooks/useSteam";
import { SignIn } from "../SignIn/SignIn";
import { NavbarProfile } from "../NavbarProfile/NavbarProfile";
import { lang } from "@/lang";
import { NavbarLink } from "../NavbarLink/NavbarLink";
import { useAdmin } from "@/hooks/useAdmin";

export function Navbar() {
  const session = useSession();
  const steam = useSteam();
  const { isAdmin } = useAdmin();

  return (
    <nav className="w-full bg-black/50 backdrop-blur border-white min-h-[88px]  h-[88px] max-h-[88px] border-b-[1px] p-6 flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-[800px]">
        <div className="flex items-center justify-center gap-4">
          <NavbarLink href="/">{lang.navbar.home}</NavbarLink>
          <NavbarLink href="/tournaments">{lang.navbar.tournaments}</NavbarLink>

          {isAdmin && (
            <>
              <NavbarLink className="text-red-500" href="/admin">
                {lang.navbar.admin.admin}
              </NavbarLink>
            </>
          )}
        </div>

        {session.status === "unauthenticated" && <SignIn />}

        {session.status === "authenticated" && steam && (
          <NavbarProfile steam={steam} />
        )}
      </div>
    </nav>
  );
}
