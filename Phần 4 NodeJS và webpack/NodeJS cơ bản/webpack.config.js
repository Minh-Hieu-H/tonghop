const path = require('path')
console.log("path_resole", path.resolve())
console.log("dirname is",__dirname)
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
        use:['style-loader','css-loader']
      }
    ]
  }
}