import getAssetFromKV from "@cloudflare/kv-asset-handler";

const GH_UNAME = "BRO3886";
const GH_URL = `https://github.com/${GH_UNAME}"`;
const PERMISSIONS_POLICY =
  'accelerometer=(), autoplay=(), camera=(), encrypted-media=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), sync-xhr=(), usb=()'

export const handleRequest = async (event) => {
	return performRedirect(event);
};

async function getPageFromKV(event) {
  const options = {}
  try {
    const page = await getAssetFromKV(event, options)
    if (page === null) {
      throw new Error('No page found, short-circuit to 404 page')
    }
    const response = new Response(page.body, page)
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade')
    response.headers.set('Permissions-Policy', PERMISSIONS_POLICY)
    return response
  } catch (e) {
    try {
      const notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: (req) =>
          new Request(`${new URL(req.url).origin}/404.html`, req),
      })
      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 404,
      })
    } catch (e) { }
    return new Response(e.message || e.toString(), { status: 500 })
  }
}

export const performRedirect = async (event) => {
	redirectData = JSON.parse("data.json");
	const urlParts = event.request.url.replace(BASE_URL, "").split("/");
	if (redirectData[urlParts[0]]) {
		return Response.redirect(redirectData[urlParts[0]], 301);
	}
	if (urlParts[0] === "gh") {
		switch (urlParts.length) {
			case 1:
				return Response.redirect(GH_URL, 301);
			case 2:
				return Response.redirect(`${GH_URL}/${urlParts[1]}`, 301);
			case 3:
				return Response.redirect(`${GH_URL}/${urlParts[1]}/commit/${urlParts[2]}`, 301);
			case 4:
				return Response.redirect(`${GH_URL}/${urlParts[1]}/issues/${urlParts[3]}`, 301);
		}
	}
  return getPageFromKV(event)
};
