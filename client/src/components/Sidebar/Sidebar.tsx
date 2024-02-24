"use client";
import { lang } from "@/lang";
import React from "react";
import { SidebarLink } from "./SidebarLink";
import {
  RiCalendarFill,
  RiGamepadFill,
  RiGroupFill,
  RiTeamFill,
} from "@remixicon/react";
import { SidebarMatch } from "./SidebarMatch";
import { SidebarTournament } from "./SidebarTournament";
import { fakeTournament } from "@/fakeData/tournament";
import { fakeMatch } from "@/fakeData/match";

export function Sidebar() {
  return (
    <div className="h-full bg-base-2 flex flex-col gap-8 p-3 min-w-[300px] max-w-[300px] border-r-2 border-base-4">
      <div className="flex flex-col gap-2">
        <SidebarLink href="/" Icon={RiGamepadFill} ActiveIcon={RiGamepadFill}>
          {lang.sidebar.home}
        </SidebarLink>
        <SidebarLink
          href="/tournaments"
          Icon={RiCalendarFill}
          ActiveIcon={RiCalendarFill}
        >
          {lang.sidebar.tournaments}
        </SidebarLink>
        <SidebarLink href="/teams" Icon={RiTeamFill} ActiveIcon={RiTeamFill}>
          {lang.sidebar.teams}
        </SidebarLink>
        <SidebarLink
          href="/players"
          Icon={RiGroupFill}
          ActiveIcon={RiGroupFill}
        >
          {lang.sidebar.players}
        </SidebarLink>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="px-2 font-medium text-sm text-gray-400">
          {lang.sidebar.my_tournaments}
        </h2>
        <div className="flex flex-col gap-2">
          <SidebarTournament tournamentData={fakeTournament} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="px-2 font-medium text-sm text-gray-400">
          {lang.sidebar.my_recent_matches}
        </h2>
        <div className="flex flex-col gap-2">
          <SidebarMatch matchData={fakeMatch} />
        </div>
      </div>
    </div>
  );
}
