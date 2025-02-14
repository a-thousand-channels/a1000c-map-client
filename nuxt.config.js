export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  static: {
    prefix: true
  },

  publicPath: process.env.PUBLIC_PATH || '/',

  defaultDataUrl: 'https://orte-backend.a-thousand-channels.xyz/public/maps/queer-poems-on-places-and-lovers/layers/queer-poems-on-places-and-lovers',
  localDataUrl: '/public/maps/1/layers/1',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: null,
    titleTemplate: null,

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#ffffff' }
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#5bbad5" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-shortkey.js', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '@/plugins/leaflet-curve.js', mode: 'client' },
    { src: '@/plugins/filters.js', mode: 'client' },
    { src: '~/plugins/preview.client.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-leaflet', { /* module options */ }],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true
  },


  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  },
  router: {
    base: process.env.PUBLIC_PATH || '/',
    scrollBehavior: async (to, from, savedPosition) => {
      console.log(process.env.PUBLIC_PATH)

      console.log("scrollBehavior")
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      console.log(from)
      console.log(to)

      if (to.hash) {
        console.log("Section: "+to.hash)
        let el = await findEl(to.hash)
        if (el) {
          if ('scrollBehavior' in document.documentElement.style) {
            console.log('Scroll smooth to '+el.offsetTop+'/'+el.offsetLeft)
            document.getElementById('page_inner').scrollTo({ top: el.offsetTop, left: el.offsetLeft, behavior: 'smooth' })
          } else {
            console.log('Scroll non smooth to '+el.offsetTop+'/'+el.offsetLeft)
            document.getElementById('page_inner').scrollTo({ top: el.offsetTop, left: el.offsetLeft })
          }
        }
        let place_query = to.query.place_id
        console.log("Place query "+ place_query)
        let place = await findEl("#"+place_query)
        if (place) {
          console.log("Place found at "+ place)
          if ('scrollBehavior' in document.documentElement.style) {
            console.log('Scroll smooth to '+place.offsetTop)
            return document.getElementById('list_content').scrollTo({ top: (place.offsetTop-20), behavior: 'smooth' })
          } else {
            console.log('Scroll non smooth to '+place.offsetTop)
            return document.getElementById('list_content').scrollTo({ top: (place.offsetTop-20) })
          }
        }

      }
      return { x: 0, y: 0 }
    }
  },
}
