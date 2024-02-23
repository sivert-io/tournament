"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useSteam } from "@/hooks/useSteam";
import { SignIn } from "../SignIn/SignIn";
import { NavbarProfile } from "./Profile";
import { useAdmin } from "@/hooks/useAdmin";
import Skeleton from "react-loading-skeleton";
import { RiSearch2Line, RiSettings3Line } from "@remixicon/react";
import NotificationButton from "../Notification/NotificationButton";

export function Titlebar() {
  const session = useSession();
  const steam = useSteam();
  const { isAdmin } = useAdmin();

  return (
    <nav
      className="w-full
    bg-base-2
    backdrop-blur
    p-3
    flex
    items-center
    justify-end
    border-b-2
    border-base-4
    gap-4
    "
    >
      <button className="p-2 hover:bg-base-1 rounded-lg">
        <RiSearch2Line size={18} color="white" />
      </button>
      <div className="h-full w-0 border-r-2 border-base-3" />

      {session.status === "unauthenticated" && <SignIn />}

      {session.status === "authenticated" && steam && (
        <>
          <NotificationButton />
          <button className="p-2 hover:bg-base-1 rounded-lg">
            <RiSettings3Line size={18} color="white" />
          </button>
          <NavbarProfile steam={steam} />
        </>
      )}

      {session.status === "loading" && (
        <>
          <Skeleton height="100%" containerClassName="w-8 h-8" />
          <Skeleton height="100%" containerClassName="w-8 h-8" />
          <Skeleton height="100%" containerClassName="w-[112px] h-9" />
        </>
      )}
    </nav>
  );
}
