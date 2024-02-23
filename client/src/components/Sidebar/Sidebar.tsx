"use client";
import { lang } from "@/lang";
import React from "react";
import { SidebarLink } from "./SidebarLink";
import { RiCalendarFill, RiGroupFill, RiTeamFill } from "@remixicon/react";
import { SidebarMatch } from "./SidebarMatch";

const fakeMatch = {
  scores: [2, 0],
  winner: 0,
  teams: [
    {
      name: "Bananismen",
      logoURL: "/logo.svg",
    },
    {
      name: "Team Simp",
      logoURL: "/logo.svg",
    },
  ],
  gameLogo: "/cs.svg",
};

export function Sidebar() {
  return (
    <div
      className="h-full
    bg-base-2
    flex
    flex-col
    gap-8
    p-3
    min-w-[300px]
    max-w-[300px]
    border-r-2
    border-base-4
    "
    >
      <div className="flex flex-col gap-2">
        <SidebarLink href="/tournaments" Icon={RiCalendarFill}>
          {lang.sidebar.tournaments}
        </SidebarLink>
        <SidebarLink href="/teams" Icon={RiTeamFill}>
          {lang.sidebar.teams}
        </SidebarLink>
        <SidebarLink href="/players" Icon={RiGroupFill}>
          {lang.sidebar.players}
        </SidebarLink>
      </div>
      <div>
        <h2 className="px-2 font-medium text-sm text-gray-400">
          {lang.sidebar.my_tournaments}
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="px-2 font-medium text-sm text-gray-400">
          {lang.sidebar.recent_matches}
        </h2>
        <div className="flex flex-col gap-2">
          <SidebarMatch matchData={fakeMatch} />
        </div>
      </div>
    </div>
  );
}
