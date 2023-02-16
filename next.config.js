module.exports = {
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },

  assetPrefix: "/_micro-interactions",
}
