import { SteamProfile } from "next-auth-steam";
import { check } from "../admin/check.js";

export async function authenticated(data: SteamProfile, callback: any) {
  const userInfo = check(data.steamid);
  callback({ ...userInfo });
}
