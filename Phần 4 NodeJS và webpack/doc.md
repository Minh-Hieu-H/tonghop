# Kiến thức chung về webpack
## Webpack là gì? Dùng khi nào 
**Webpack**: Là 1 công cụ chạy trên  nền tảng JavaScript. Mục đích của nó là có thể biến đổi các nội dung giao diện người dùng như các file html, css các hình ảnh.... 
## Cách chạy webpack 
* Cài webpack trong chế độ devDependencies vì tool này chỉ chạy trong chế độ dev
* Cài webpack-cli ở chế độ local
* Chạy câu lệnh `yarn add webpack webpack-cli -D` để cài đựat
* Mở file `package.json` để thêm dòng lệnh `"build":"webpack"` vào trong `script`
* Mặc định webpack sẽ tạo ra thư mục `dist` để chứa file sau khi build
* Muốn custom **dist** phải tạo ra file `webpack.config.js`
* webpack sẽ tự nhận diện file `webpack.config.js` và lấy ra những config trong đó 
## Sử dụng file CSS trong webpack
1. Cài đặt loaders: Cài đặt các loaders cần thiết để load file css, `css-loader, style-loader`
2. Cấu hình webpack trong tệp cấu hình, thêm các quy tắc để sử dụng loader đã đặt
3. Import CSS: Trong tập tin JS, `import` file .CSS
4. Chạy Webpack để biên dịch
## Các bài thực hành nhỏ
**Bài 1 :** Cấu hình webpack ở mức cơ bản yêu cầu tạo ra 1 file chạy đoạn scirpt là 1 func ở mục Src
Đối với bài tập 1: ta cấu hình lại file `webpack.config.js` như sau:
```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  }
}
```
**Bài 2:** Cấu hình webpack để load file css
```js
const path = require('path')
module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
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
```
Tương tự, đối với sass ta cần phải `yarn add sass sass-loader -D`, các bước tiếp theo thực hiện giống với file .css
**Bài 3:** 2 bài trên config file CSS  và JS, phải chỉnh đường dẫn bằng tay. Trong bài này hãy config ra file HTML dựa trên 1 file HTML mẫu để khi build ra thu được file như mục ở trên