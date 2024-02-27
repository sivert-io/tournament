import { createServer } from "http";
import { initialize } from "./src/socket.js";
import { manager } from "./src/utils/brackets/brackets.js";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3090;

const httpServer = createServer();

initialize(httpServer);

httpServer.listen(PORT);

console.log(`Websocket accessible on port ${PORT}`);
const tourney = await manager.get.tournamentData(0);

if (tourney.stage.length === 0) {
  manager.create.stage({
    name: "NTLAN 2024 Vår",
    tournamentId: 0,
    type: "round_robin",
    settings: {
      size: 2,
      groupCount: 2,
    },
  });
}
