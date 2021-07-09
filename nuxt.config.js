module.exports = {
  /*
   ** Headers of the page
   */
  server: {
    port: 3000, // default: 3000
    host: "0.0.0.0" // default: localhost
  },
  target: "server",
  head: {
    title: "The WAIFU Project - your currency to get a digital girlfriend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "The WAIFU Project connects the world of digital girlfriends and decentralized finance. $WAIF will be the first cryptocurrency to reward users with different tiers of NFT's when they stake their WAIF tokens into the farming contract to earn and create a HAREM. In the future, your HAREM will yield you returns via staking."
      },
      { itemprop: "name", content: "The WAIFU Project" },
      {
        itemprop: "description",
        content:
          "The WAIFU Project connects the world of digital girlfriends and decentralized finance. $WAIF will be the first cryptocurrency to reward users with different tiers of NFT's when they stake their WAIF tokens into the farming contract to earn and create a HAREM. In the future, your HAREM will yield you returns via staking."
      },
      { itemprop: "image", content: "/images/Crystal Maiden.png" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The WAIFU Project" },
      {
        name: "twitter:description",
        content:
          "The WAIFU Project connects the world of digital girlfriends and decentralized finance. $WAIF will be the first cryptocurrency to reward users with different tiers of NFT's when they stake their WAIF tokens into the farming contract to earn and create a HAREM. In the future, your HAREM will yield you returns via staking."
      },
      { name: "twitter:image", content: "/images/Crystal Maiden.png" },
      //Open Graph
      { propety: "og:title", content: "The WAIFU Project" },
      {
        propety: "og:description",
        content:
          "The WAIFU Project connects the world of digital girlfriends and decentralized finance. $WAIF will be the first cryptocurrency to reward users with different tiers of NFT's when they stake their WAIF tokens into the farming contract to earn and create a HAREM. In the future, your HAREM will yield you returns via staking."
      },
      { propety: "og:image", content: "/images/Crystal Maiden.png" },
      { propety: "og:url", content: "" },
      { propety: "og:site_name", content: "The WAIFU Project" },
      { propety: "og:type", content: "article" },
      { property: "vk:image", content: "/images/Crystal Maiden.png" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" },
      {
        rel: "apple-touch-icon",
        href: "/favicons/apple-touch-icon.png"
      },
      { rel: "icon", type: "image/png", href: "/favicons/favicon-16x16.png" },
      { rel: "icon", type: "image/png", href: "/favicons/favicon-32x32.png" },
      {
        rel: "mask-icon",
        href: "/favicons/safari-pinned-tab.svg",
        color: "#5bbad5"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  plugins: [],
  // scss
  buildModules: ["@nuxtjs/style-resources", "@aceforth/nuxt-optimized-images"],
  optimizedImages: {
    optimizeImages: true
  },
  styleResources: {
    scss: ["./assets/scss/typography.scss", "./assets/scss/variables.scss"]
  },
  router: {
    linkExactActiveClass: "active-link"
  },
  css: ["./assets/scss/global.scss"],
  /*
   ** Build configuration
   */ modules: [
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],
  build: {
    /*
     ** Run ESLint on save
     */
    devMiddleware: {
      headers: {
        'Cache-Control': 'no-store',
        Vary: '*'
      }
    },
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].[hash].js" : "[chunkhash].js")
    },
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
