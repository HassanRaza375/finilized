import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  head: {
    titleTemplate: "%s - finilized",
    title: "finilized",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  loading: { color: "red", height: "4px", duration: 6000 },
  loadingIndicator: { name: "circle", color: "red" },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/Plugins/Infinitescroll.js", ssr: false }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: "http://localhost:4000/",
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      themes: {
        light: {
          primary: "#ff5722",
          warning: "#F77F00",
          accent: "#006d77",
          info: "#3DDCCE",
          success: "#006400",
          main: "#ff5722",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
