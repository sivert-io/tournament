import { api } from "../api/api.js";
let registeredUsers = []; // Store in-memory
export async function registerUser(data) {
    if (registeredUsers.length === 0)
        registeredUsers = (await api.getAllUsers()).map((user) => user.steamId); // Fetch users if not fetched yet
    if (!registeredUsers.includes(data.steamid)) {
        const userData = {
            steamId: data.steamid,
        };
        api.registerUser(userData);
        registeredUsers.push(data.steamid);
    }
}
