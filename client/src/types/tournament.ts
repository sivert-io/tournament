import { Database } from "brackets-manager";
import { Team } from "./team";

export interface tournaments {
  [tournament_id: number]: Database;
}

export type Stage = {};

export interface Tournament {
  name: string;
  start: Date;
  end: Date;
  id: number;
  stages: Stage[];
  teams: Team[];
  gameLogo?: string;
}
