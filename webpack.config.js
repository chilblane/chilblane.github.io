const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    historyApiFallback: true
  },
  entry: './src/app/main.jsx',
  output: {
    filename: 'static/bundle.js',
    path: path.resolve(__dirname, 'build')
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
        test: /\.(png|gif)$/,
        loader: 'file-loader?name=[path][name].[ext]?[hash]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl']
  },
  // eslint: {
  //   configFile: '.eslintrc'
  // },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
