import { getAssetFromKV } from "@cloudflare/kv-asset-handler";
import {redirect} from "./data.js"

const GH_URL = `https://github.com/BR03886`;

export async function handleRequest(event) {
	return performRedirect(event);
}

async function getPageFromKV(event) {
	const url = new URL(event.request.url);
	let options = {};
	try {
		return await getAssetFromKV(event, options);
		//on error try appending html
	} catch (e) {
		try {
			const options = { mapRequestToAsset: (req) => new Request(`${new URL(req.url)}.html`, req) };
			const page = await getAssetFromKV(event, options);
			return new Response(page.body, page);
			//on error return 404
		} catch (e) {
			let notFoundResponse = await getAssetFromKV(event, {
				mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
			});
			return new Response(notFoundResponse.body, {
				...notFoundResponse,
				status: 404,
			});
		}
		// return new Response(e.message || e.toString(), { status: 500 });
	}
}

async function performRedirect(event) {
	const urlParts = event.request.url.replace(BASE_URL, "").split("/");
	if (redirect[urlParts[0]]) {
		return Response.redirect(redirect[urlParts[0]], 301);
	}
	if (urlParts[0] == "gh") {
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
	return getPageFromKV(event);
}
