import { load } from "cheerio";
import steamID from "steamid";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    const bigIntdSteamId = new steamID(id).getBigIntID();
    const convertedSteamId = Number(bigIntdSteamId & BigInt(0xffffffff));
    const url = `https://steamcommunity.com/miniprofile/${convertedSteamId}`;

    const response = await fetch(url);

    if (response.ok) {
      const body = await response.text();

      // Load the HTML into cheerio
      const $ = load(body);

      const videoElement = $("source");

      const src = videoElement.attr("src");

      return Response.json({ src });
    }
  } catch (e) {
    console.error("Error converting steam id");
    console.error(e);
    return Response.json({ src: undefined });
  }
}
