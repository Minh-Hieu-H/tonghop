const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
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
  ],
  devServer:{
    static : {
      directory: 'dist' // Đường dẫn tương đối đến thư mục chứa file index.html
    },
    port: 3000, // port thay cho port mặc định
    open:true, // Mở trang webpack khi chạy trên terminal
    compress:true,  // Bật Zip cho các tài nguyên
    historyApiFallback:true 
  }
}