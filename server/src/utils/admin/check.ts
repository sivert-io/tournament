import { config } from "dotenv";
import { getPowerLevel } from "./levels.js";
config();

export function check(id: string) {
    const ADMINS = process.env.ADMINS?.split(',') || [];
    const isAdmin = ADMINS.find((adminId) => adminId === id) ? true : false
    const powerLevel = getPowerLevel(isAdmin ? 'admin' : 'member')

    return {isAdmin, powerLevel}
}