import { Tournament } from "@/types/tournament";
import { fakeTeam1, fakeTeam2 } from "./team";

export const fakeTournament: Tournament = {
  id: 0,
  name: "CS2 2024 Vår",
  start: new Date(),
  end: new Date(2024, 6, 12),
  stages: [],
  teams: [fakeTeam1, fakeTeam2],
  gameLogo: "/games/logo-cs2.png",
} as const;
