import { check } from "../admin/check.js";
export async function authenticated(data, callback) {
    const userInfo = check(data.steamid);
    callback({ ...userInfo });
}
