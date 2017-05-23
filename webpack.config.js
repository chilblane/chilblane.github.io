const webpack = require("webpack");

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: __dirname + "/app/Main.jsx",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist/",
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js?./,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [
                require('nib')(),
                require('rupture')()
              ],
              import: [
                '~nib/lib/nib/index.styl',
                '~rupture/rupture/index.styl'
              ]
            },
          },
        ],
      },
      {
        test: /\.md$/,
        loader: 'markdown-with-metadata-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=[path][name].[ext]?[hash]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  }
};
