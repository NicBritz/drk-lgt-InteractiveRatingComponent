export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","desktop-preview.png","favicon-32x32.png","icon-star.svg","illustration-thank-you.svg","mockup.jpeg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpeg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-c8cf163d.js","imports":["_app/immutable/start-c8cf163d.js","_app/immutable/chunks/index-367179ca.js","_app/immutable/chunks/index-d400fbb5.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
