import { io } from "socket.io-client";
const socket = io(process.env.SOCKET_URL || 'http://localhost:3090');

export { socket };
