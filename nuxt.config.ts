// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: `Martin's server network`,
      titleTemplate: (title) =>
        title
          ? `Martin's server network - ${title}`
          : `Martin's server network`,
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  css: ["/assets/css/main.css"],
  content: {
    contentHead: false,
  },
});
