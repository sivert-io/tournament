import { Tournament } from "@/types/tournament";

export const fakeTournament: Tournament = {
  id: 0,
  name: "CS2 2024 Vår",
  start: new Date(),
  end: new Date(2024, 6, 12),
  stages: [],
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
} as const;
