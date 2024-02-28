import axios, { AxiosError } from "axios";
import { User } from "../../types/types.js";
import { config } from "dotenv";
config();

const API_HOST = new URL(process.env.API_HOST || "http://localhost:8080");
const API_TOKEN = process.env.API_TOKEN;

function registerUser(data: User) {
  axios
    .post(new URL("/api/user/register", API_HOST).href, data, {
      headers: { Authorization: "Bearer " + API_TOKEN },
    })
    .catch(function (error: AxiosError) {
      console.log(error.response?.data);
    });
}
async function getAllUsers(): Promise<User[]> {
  return await axios
    .get(new URL("/api/user/", API_HOST).href, {
      headers: { Authorization: "Bearer " + API_TOKEN },
    })
    .then((res) => res.data.users)
    .catch((error: AxiosError) => {
      console.log(error.message);
      return [];
    });
}

const api = {
  registerUser,
  getAllUsers,
};

export { api };
