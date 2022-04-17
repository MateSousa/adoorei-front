export default {
  head: {
    title: 'Adoorei',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {
    color: '#00d82',
    height: '5px'
  },
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.css',
  ],
  plugins: [
    '@/plugins/accessor',
  ],
  components: [{ path: '@/components', pathPrefix: false }],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  axios: {
    baseURL: 'https://fakestoreapi.com/',
  },
  fontawesome: {
    icons: {
      solid: true
    }
  },
  build: {
    extractCSS: true,
  },
}
