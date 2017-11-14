const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (options) => ({
  entry: options.entry,

  output: Object.assign({
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  }, options.output),

  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: [
        path.resolve(process.cwd(), 'app/assets/js'),
        /node_modules/
      ],
      query: options.babelQuery
    }, {
      test: /\.(jpe?g|png|gif)$/,
      loader: 'file-loader?name=assets/images/[path][name].[ext]&context=./docs/assets/images',
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [{
          loader: 'css-loader',
          query: {
            sourceMap: false,
          },
        }],
      })
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            minimize: {safe: true}
          }
        }, 'fast-sass-loader']
      })
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader?name=assets/fonts/[name].[ext]"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url-loader?limit=10000&mimetype=image/svg+xml"
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.(mp4|webm|mpg|ogg)$/,
      loader: 'file-loader?name=assets/video/[path][name].[ext]&context=./app/assets/video&limit=10000',
    }]
  },
  devServer: options.devServer,
  plugins: options.plugins.concat([
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'window._': 'lodash',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]),
  resolve: options.resolve,
  devtool: options.devtool,
  performance: options.performance,
})
