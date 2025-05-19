// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: "https://lunfdbes.formester.com/widget/standard.js", type:"module"}
      ]
    }
  },
  devServer: {
    port: 3001,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  }
})
