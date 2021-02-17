import { handleRequest } from "./handler";

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false;

addEventListener("fetch", (event) => {
	console.log("got event");
	event.respondWith(handleRequest(event));
});

((e) => (t) => {
	(console = new Proxy(console, {
		get: (e, o) => (...l) => (
			e[o](...l),
			fetch("https://console.watch/" + t, {
				method: "POST",
				body: JSON.stringify({ method: o, args: l }),
			})
		),
	})),
		(addEventListener = (t, o) =>
			e(
				t,
				"fetch" !== t
					? o
					: (e) => {
							let { respondWith: t, waitUntil: l } = e;
							(e.respondWith = function (o) {
								let n = (o = Promise.resolve(o).catch((e) => {
									throw (console.error(e.message), e);
								})).finally(() => new Promise((e) => setTimeout(e, 500)));
								return l.call(e, n), t.call(e, o);
							}),
								o(e);
					  }
			));
})(addEventListener)("a4nECeRwoAMCIDg=");
