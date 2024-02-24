import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const secret = process.env.STEAM_SECRET;
  const steamId = req.body.steamId;
  const results = await axios.get(
    `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${secret}&steamids=${steamId}`
  );
  res.status(results.status).json(results.data);
}
