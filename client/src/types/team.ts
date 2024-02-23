import { SteamProfile } from "next-auth-steam";

export interface Team {
  name: string;
  logoURL?: string;
  //   leader: SteamProfile;
  //   participants: SteamProfile[];
}
