import { Server } from "socket.io";
import { manager } from "./utils/brackets/brackets.js";
import { check } from "./utils/admin/check.js";
import { registerUser } from "./utils/steam/register.js";
import { SteamProfile } from "next-auth-steam";

export function initialize(httpServer: any) {
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    socket.on("authenticated", async (data: SteamProfile, callback) => {
      const userInfo = check(data.steamid);
      registerUser(data);

      callback({ ...userInfo });
    });

    socket.on("get_all_data", async (id, callback) => {
      const tournamentData = await manager.get.tournamentData(id);
      callback(tournamentData);
    });
  });
}
