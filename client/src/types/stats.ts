import { CsStats } from "./cs";
import { MappedLeetifyData } from "./leetify";

export interface PlayerStats {
  cs: CsStats;
  leetify: MappedLeetifyData;
}
