import { Team } from "./team";

export type Match = {
  id: number;
  teams: Team[];
  scores: number[];
  gameLogo?: string;
  winner?: number;
};
