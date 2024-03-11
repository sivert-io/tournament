"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useSteam } from "@/hooks/useSteam";
import { SignIn } from "../SignIn/SignIn";
import { NavbarProfile } from "./Profile";
import Skeleton from "react-loading-skeleton";
import Notification from "./Notification/Notification";
import { useTheme } from "antd-style";
import { Button } from "antd";
import { Search, Settings } from "lucide-react";
import Image from "next/image";

export function Titlebar() {
  const session = useSession();
  const steam = useSteam();
  const theme = useTheme();

  return (
    <nav
      className="w-full p-3 flex justify-between items-center"
      style={{
        background: theme.colorBgContainer,
        borderBottom: "1px solid " + theme.colorBorder,
      }}
    >
      <Image
        src="/logo-dark.svg"
        alt="Tournament Logo"
        width={128}
        height={0}
      />
      <div className="flex gap-4 items-center justify-center">
        {session.status === "unauthenticated" && <SignIn />}

        {session.status === "authenticated" && steam && (
          <>
            <Notification />
            <Button
              icon={<Settings size={16} />}
              className="p-2 hover:bg-base-1 rounded-lg"
              href="/settings"
            />
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
      </div>
    </nav>
  );
}
