import { SteamProfile } from "next-auth-steam";
import { RGBColor } from "react-color";

export interface Team {
  slug: string;
  name: string;
  border?: {
    thickness: number;
    color: RGBColor;
  };
  logoURL?: string;
  owner?: SteamProfile;
  members?: SteamProfile[];
}
