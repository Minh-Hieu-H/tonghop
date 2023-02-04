const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js'
  },
  module:{
    rules:[
      {
        test:/\.s[ac]ss|css$/,
        use:['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}