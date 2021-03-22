export default {
    target: 'static', // default is 'server'
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "店厨supportヒラマツ",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: ["~/plugins/firebase"],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)// nuxt.config.js
    buildModules: ["@nuxtjs/vuetify"],
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [],

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
    env: {
        FUNCTION_URL: process.env.URL || "http://localhost:3000"
    }
};