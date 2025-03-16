import { CsNamedStat } from "@/types/cs";
import { Leetify } from "@/types/leetify";
import { mapLeetifyData } from "@/utils/leetify";
import { log } from "console";

async function getLeetify(id: string) {
  const url = new URL(`https://api.leetify.com/api/profile/${id}`);
  const response = await fetch(url);
  if (response.ok) {
    const data: Leetify = await response.json();
    return mapLeetifyData(data);
  }

  return null;
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url = new URL(
    "http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2"
  );

  url.searchParams.set("key", process.env.STEAM_SECRET || "XXXXX");
  url.searchParams.set("steamid", id || "XXXXXX");
  url.searchParams.set("appid", "730");
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    const ret: any = { cs: {}, leetify: {} };
    data.playerstats.stats.map((stat: CsNamedStat) => {
      ret.cs[stat.name] = stat.value;
    });

    const leetifyData = await getLeetify(params.id);
    ret.leetify = leetifyData;

    return Response.json(ret);
  }
  console.log(response.statusText);
  return Response.json(null);
}
