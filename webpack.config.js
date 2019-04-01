let path = require('path');
let webpack = require('webpack');
module.exports = {
  entry: './src/index.js',
  mode: "development",
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "env"
          ]
        }
      },
    }]
  },
  devServer: {
    disableHostCheck: true,
    inline: true,
    port: 8181
  },
}
