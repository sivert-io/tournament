import { Match } from "@/types/match";

export const fakeMatch: Match = {
  id: 0,
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
  gameLogo: "/games/cs.svg",
} as const;
