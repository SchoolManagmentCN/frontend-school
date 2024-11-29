import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering
  ssr: false,

  // Global page headers
  head: {
    titleTemplate: '%s - frontend-school',
    title: 'frontend-school',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS
  css: [],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    // ESlint module
    '@nuxtjs/eslint-module',
    // Vuetify module
    '@nuxtjs/vuetify'
  ],

  // Modules
  modules: [
    // Axios module
    '@nuxtjs/axios',
    // Auth module for authentication
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration

  axios: {
    baseURL: 'http://localhost:8181' // Asegúrate de que esta URL sea correcta
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: false // Desactiva la obtención automática de datos del usuario
        },
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/dashboard/admin'
    }
  },
  // Vuetify module configuration
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build configuration
  build: {}
  // // Middleware
  // router: {
  //   middleware: ['auth'] // Asegúrate de usar el middleware globalmente si es necesario
  // }
}
