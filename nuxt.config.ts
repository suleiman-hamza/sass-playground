// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '123445555',
    public: {
      apiBase: 'a-publick-api-key'
    }
  }
})
