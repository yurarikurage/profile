// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-microcms-module"
    // "@nuxt/ui"
  ],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          // href: "https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap",
          // href: "https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300;400;500&display=swap",
          href: "https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
})

