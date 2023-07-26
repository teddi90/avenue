// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  app: {
    head: {
      title: 'Авеню 8 ',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/style/main.scss'
  ],
  modules: [
    'nuxt-icon',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/supabase',
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  }
})
