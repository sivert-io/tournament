"use client";
import { lang } from "@/lang";
import { Flexbox } from "react-layout-kit";
import { SidebarLink } from "./SidebarLink";
import { fakeTournament } from "@/fakeData/tournament";
import { SidebarTournament } from "./SidebarTournament";
import { Swords, ShieldHalf, Gamepad2, Trophy, User } from "lucide-react";
import { SidebarMatch } from "./SidebarMatch";
import { fakeMatch } from "@/fakeData/match";
import { useTheme } from "antd-style";
export function SidebarNew() {
  const theme = useTheme();

  return (
    <Flexbox
      className="h-full border-r"
      style={{
        borderColor: theme.colorBorder,
        background: theme.colorBorderBg,
        minWidth: 256,
        maxWidth: 256,
      }}
      width={256}
      padding={8}
      gap={8 * 4}
      direction="vertical"
    >
      <Flexbox direction="vertical" gap={8}>
        <SidebarLink href="/" Icon={Gamepad2}>
          {lang.sidebar.home}
        </SidebarLink>
        <SidebarLink href="/tournaments" Icon={Trophy}>
          {lang.sidebar.tournaments}
        </SidebarLink>
        <SidebarLink href="/matches" Icon={Swords}>
          {lang.sidebar.matches}
        </SidebarLink>
        <SidebarLink href="/teams" Icon={ShieldHalf}>
          {lang.sidebar.teams}
        </SidebarLink>
        <SidebarLink href="/players" Icon={User}>
          {lang.sidebar.players}
        </SidebarLink>
      </Flexbox>
      <Flexbox direction="vertical" gap={8}>
        <p style={{ color: theme.colorTextLabel }}>
          {lang.sidebar.my_tournaments}
        </p>
        <SidebarTournament tournamentData={fakeTournament} />
      </Flexbox>
      <Flexbox direction="vertical" gap={8}>
        <p style={{ color: theme.colorTextLabel }}>
          {lang.sidebar.my_recent_matches}
        </p>
        <SidebarMatch matchData={fakeMatch} />
      </Flexbox>
    </Flexbox>
  );
}
