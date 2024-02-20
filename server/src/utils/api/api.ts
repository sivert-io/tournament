import axios from "axios";
import { SteamProfile } from "next-auth-steam";

const api_endpoint = new URL(process.env.API_HOST || "http://localhost:8080");

function registerUser(data: SteamProfile) {
  axios
    .post(new URL("/api/user/register", api_endpoint).href, data)
    .catch(function (error: Error) {
      console.log(error.message);
    });
}

const api = {
  registerUser,
};

export { api };
