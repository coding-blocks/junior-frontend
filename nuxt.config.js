const config = require('./config');

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/@coding-blocks/motley@2.6.3/dist/coding-blocks/app.min.css' }
    ],
    script: [
      { src: 'https://unpkg.com/@coding-blocks/web-components@0.0.12/dist/index.js' }
    ]
  },

  server: {
    port: config.PORT 
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '@coding-blocks/motley/dist/online-cb/app.min.css',
    '~/assets/styles/app.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios-accessor.ts',
    '~/plugins/vue-form-generator',
    '~/plugins/vuency.ts',
    '~/plugins/repository.ts'
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
    '@nuxtjs/redirect-module'
  ],

  redirect: [
    {
      from: '^.*(?<!\/)$',
      to: (from, req) => req.url + '/'
  }
],

  router: {
    linkActiveClass: 'active',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: config.axios,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    standalone: true
  }
}
