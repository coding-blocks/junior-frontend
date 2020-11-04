export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'junior-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://unpkg.com/@coding-blocks/web-components@0.0.12/dist/index.js' }
    ]
  },

  server: {
    port: process.env.PORT || 3005 
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@coding-blocks/motley/dist/online-cb/app.min.css',
    '~/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios-accessor.ts',
    '~/plugins/vue-form-generator'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  router: {
    linkActiveClass: 'active',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BACKEND?.baseURL || 'http://localhost:4242/api',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
