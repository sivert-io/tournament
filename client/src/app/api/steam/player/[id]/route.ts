export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url = new URL(
    "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002"
  );
  url.searchParams.set("key", process.env.STEAM_SECRET || "XXXXX");
  url.searchParams.set("steamids", id || "XXXXXX");
  const response = await fetch(url);
  const data = await response.json();

  if (data.response.players.length > 0)
    return Response.json(data.response.players[0]);
  return Response.json(null);
}
