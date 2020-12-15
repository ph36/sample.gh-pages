
import colors from 'vuetify/es5/util/colors'

export default {
  srcDir: 'src/',

  server: {
    host: '0.0.0.0'
  },

  router: {
    base: '/sample.gh-pages/'
  },

  // global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - sample',
    title: 'sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sample.gh-pages/favicon.ico' }
    ]
  },

  // global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // // https://go.nuxtjs.dev/vuetify
    // '@nuxtjs/vuetify',
  ],

  // modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // build configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
