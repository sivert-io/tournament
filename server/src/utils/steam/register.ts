import { SteamProfile } from "next-auth-steam";

export function registerUser(data: SteamProfile) {
  // Run code that saves the users details here
  // Detail that is saved is used in presenting tournament data
  // Check if user already exists
  //   if (!db.find(data.steamid)) {
  //     axios
  //       .post("/user/register", data)
  //       .then(function (response: { statusCode: number; message: string }) {
  //         console.log(response);
  //       })
  //       .catch(function (error: Error) {
  //         console.log(error);
  //       });
  //   }
}
