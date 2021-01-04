const config = require('./config');
const MonacoEditorPlugin = require('monaco-editor-webpack-plugin')

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Coding Blocks Junior',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/@coding-blocks/motley@2.7.2/dist/coding-blocks/app.min.css' }
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
    '~/plugins/repository.ts',
    '~/plugins/unique-id.ts',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome'
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
  axios: config.axios,

  // Fontawesome configuration
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faCheck', 'faTimes', 'faExclamation', 'faExclamationTriangle']
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    standalone: true,
    plugins: [
      new MonacoEditorPlugin({
        features: ['!gotoSymbol'],
        // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        // Include a subset of languages support
        // Some language extensions like typescript are so huge that may impact build performance
        // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
        // Languages are loaded on demand at runtime
      })  
    ]
  }
}
