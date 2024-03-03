import { Server } from "socket.io";
import { authenticated } from "./authenticated.js";
import { registerUser } from "./registerUser.js";
export function initialize(httpServer) {
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
        },
    });
    io.on("connection", (socket) => {
        socket.on("authenticated", authenticated); // Return admin status to user
        socket.on("registerUser", registerUser); // Register user to database
    });
}
