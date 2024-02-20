import { SteamProfile } from "next-auth-steam";
import { api } from "../api/api.js";

export function registerUser(data: SteamProfile) {
  // Run code that saves the users details here
  // Detail that is saved is used in presenting tournament data
  // Check if user already exists
  api.registerUser(data);
}
