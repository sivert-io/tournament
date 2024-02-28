import { createServer } from "http";
import { initialize } from "./src/utils/socket/socket.js";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3090;

const httpServer = createServer();

initialize(httpServer);

httpServer.listen(PORT);

console.log(`Websocket accessible on port ${PORT}`);
