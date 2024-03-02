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
      className="w-full p-3 flex justify-end relative gap-4"
      style={{
        background: theme.colorBgContainer,
        borderBottom: "1px solid " + theme.colorBorder,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-start p-3 opacity-50">
        <Image
          src="/logo-dark.svg"
          alt="Tournament Logo"
          width={128}
          height={0}
        />
      </div>
      {/* <Button
        icon={<Search size={16} />}
        className="p-2 hover:bg-base-1 rounded-lg"
      />
      <div
        style={{ width: 1, height: "100%", background: theme.colorBorder }}
      /> */}

      {session.status === "unauthenticated" && <SignIn />}

      {session.status === "authenticated" && steam && (
        <>
          <Notification />
          <Button
            icon={<Settings size={16} />}
            className="p-2 hover:bg-base-1 rounded-lg"
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
    </nav>
  );
}
