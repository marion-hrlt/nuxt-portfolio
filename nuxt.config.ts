export default defineNuxtConfig({
	strapi: {
		url: process.env.API_BASE_URL || "http://localhost:1337",
	},
	app: {
		head: {
			title: "Marion Portfolio",
			meta: [{name: "description", content: "Everything about - Nuxt-3"}],
		},
	},
	runtimeConfig: {
		apiBase: process.env.NUXT_API_URL || "http://localhost:1337/api",
		baseUrl: process.env.API_BASE_URL || "http://localhost:1337",
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi"],
});
