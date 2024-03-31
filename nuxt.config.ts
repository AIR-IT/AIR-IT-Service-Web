// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,

  modules: [
    "@nuxtjs/tailwindcss",
  ],

  plugins: [
    '~/plugins/vue-scrollto',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'id',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'AIR IT Service - Layanan IT Support untuk Personal',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.png',
        },
        // {
        //   rel: 'style',
        //   href: 'https://fonts.bunny.net/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap',
        // },
      ],
    }
  }
})
