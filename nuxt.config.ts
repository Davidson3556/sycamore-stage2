// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: ['@nuxt/ui', '@vueuse/motion/nuxt'],
  
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      title: 'Staco - Empowering Your Financial Future',
      meta: [
        { name: 'description', content: 'Staco provides smart financial solutions for modern businesses. Manage your finances with ease and confidence.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        { name: 'author', content: 'Staco' },
        { name: 'keywords', content: 'finance, business, payments, fintech, money management' },
        { property: 'og:title', content: 'Staco - Empowering Your Financial Future' },
        { property: 'og:description', content: 'Smart financial solutions for modern businesses. Manage your finances with ease and confidence.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/logo.svg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Staco - Empowering Your Financial Future' },
        { name: 'twitter:description', content: 'Smart financial solutions for modern businesses.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' }
      ]
    }
  },
  
  ui: {
    fonts: true,
    colorMode: true
  }
})
