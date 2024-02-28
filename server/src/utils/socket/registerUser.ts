import { SteamProfile } from "next-auth-steam";
import { User } from "../../types/types.js";
import { api } from "../api/api.js";

let registeredUsers: string[] = []; // Store in-memory

export async function registerUser(data: SteamProfile) {
  if (registeredUsers.length === 0)
    registeredUsers = (await api.getAllUsers()).map((user) => user.steamId); // Fetch users if not fetched yet

  if (!registeredUsers.includes(data.steamid)) {
    const userData: User = {
      steamId: data.steamid,
    };

    api.registerUser(userData);
    registeredUsers.push(data.steamid);
  }
}
