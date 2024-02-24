"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useSteam } from "@/hooks/useSteam";
import { SignIn } from "../SignIn/SignIn";
import { NavbarProfile } from "./Profile";
import Skeleton from "react-loading-skeleton";
import { RiSearch2Line, RiSettings3Line } from "@remixicon/react";
import Notification from "./Notification/Notification";

export function Titlebar() {
  const session = useSession();
  const steam = useSteam();

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
        <RiSearch2Line size={20} />
      </button>
      <div className="h-full w-0 border-r-2 border-base-3" />

      {session.status === "unauthenticated" && <SignIn />}

      {session.status === "authenticated" && steam && (
        <>
          <Notification />
          <button className="p-2 hover:bg-base-1 rounded-lg">
            <RiSettings3Line size={20} />
          </button>
          <NavbarProfile steam={steam} />
        </>
      )}

      {session.status === "loading" && (
        <>
          <Skeleton height="100%" containerClassName="w-9 h-9 flex" />
          <Skeleton height="100%" containerClassName="w-9 h-9 flex" />
          <Skeleton height="100%" containerClassName="w-[108px] h-9 flex" />
        </>
      )}
    </nav>
  );
}
