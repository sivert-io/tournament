"use client";
import { Tournament } from "@/types/tournament";
import { useTheme } from "antd-style";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function SidebarTournament({
  tournamentData,
}: {
  tournamentData: Tournament;
}) {
  const theme = useTheme();
  const cardStyle: React.CSSProperties = {
    background: theme.colorBgElevated,
    border: "1px solid " + theme.colorBorder,
    color: theme.colorTextBase,
  };
  const className = "flex text-sm rounded-lg";
  return (
    <Link
      href={`/tournaments/${tournamentData.id}`}
      className={className}
      style={cardStyle}
    >
      <div className="flex flex-col gap-1 p-2 w-[75%]">
        <p className="truncate">{tournamentData.name}</p>
        <p className="text-gray-400">
          {tournamentData.start.toLocaleString("en", {
            month: "short",
            day: "numeric",
          })}{" "}
          –{" "}
          {tournamentData.end.toLocaleString("en", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <Image
          src={tournamentData.gameLogo || ""}
          alt=""
          width={48}
          height={48}
        />
      </div>
    </Link>
  );
}
