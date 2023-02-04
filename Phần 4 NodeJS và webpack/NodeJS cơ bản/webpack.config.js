const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module:{
    rules:[
      {
        test:/\.s[ac]ss|css$/,
        use:[MiniCssExtractPlugin.loader
          ,'css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename:'[name].[contenthash].css'
      }
    ),
    new HtmlwebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}