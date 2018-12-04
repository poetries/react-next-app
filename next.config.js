require('dotenv').config()

/* eslint-disable */
const withLess = require('@zeit/next-less')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // eslint-disable-line
const path = require('path')
const Dotenv = require('dotenv-webpack')

const { ANALYZE } = process.env
const pro = process.env.NODE_ENV === 'production'
const assetPath = pro ? 'https://cdn.yesdat.com' : ''

module.exports = withLess({
  distDir: 'build', //自定义输出目录
  useFileSystemPublicRoutes: false,
  assetPrefix: assetPath,
  serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    API_URL: process.env.API_URL
  },
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 7777,
        openAnalyzer: true,
      }))
    }
    return config
  }
})
