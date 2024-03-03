import { Match } from "@/types/match";
import { fakeTeam1, fakeTeam2 } from "./team";

export const fakeMatch: Match = {
  id: 0,
  scores: [2, 0],
  winner: 0,
  teams: [fakeTeam1, fakeTeam2],
  gameLogo: "/games/cs.svg",
} as const;
