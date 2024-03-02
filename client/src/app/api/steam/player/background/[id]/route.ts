import { load } from "cheerio";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url = new URL("http://steamcommunity.com/profiles/" + id);
  const response = await fetch(url);

  if (response.ok) {
    const body = await response.text();

    // Load the HTML into cheerio
    const $ = load(body);

    // Find the element with the specified class name
    const element = $("div.profile_page.has_profile_background");
    const videoElement = $("video");

    // If the element is found, extract the background URL from its style attribute
    let background = videoElement.attr("poster");

    if (element.length > 0) {
      const styleAttribute = element.attr("style");
      const regex = /background-image:\s*url\(\s*'([^']+)'\s*\)/;
      if (styleAttribute) {
        const match = styleAttribute.match(regex);
        if (match) {
          background = match[1];
        }
      }
    }

    return Response.json({ url: background });
  }
}
