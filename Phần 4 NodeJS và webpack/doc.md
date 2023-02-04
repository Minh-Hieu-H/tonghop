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
## Sử dụng file HTML Webpack Plugin để tự động tạo ra file HTML
* Vấn đề đặt ra : Khi build webpack chúng ta phải tự cấu hình các đường dẫn CSS, JS 1 cách thủ công. Ta cần thực hiện nó 1 cách tự động khi build webpack
1. html-webpack-plugin sẽ giúp ta build ra 1 file html được cấu hình trong webpack
2. Chạy câu lệnh yarn add html-webpack-plugin -D

## Tách CSS ra các file riêng:
* **Vấn đề đặt ra:** Khi ta dùng CSS đang được JS DOM thì dễ xảy ra tình trạng "chớp trắng" khi mới load trang
* Tăng kích thước file JS
* **Cách fix:**
  
  + Dùng `mini-css-extract-plugin` để tách nó thành những file riêng
  + Chạy câu lệnh `yarn add mini-css-extract-plugin -D` để cài đặt 
* **Lưu ý**:
  + Phải đảm bảo đã dùng plugin `html-webpack-plugin`, vì nó cần plugin này để tự động generate ra thẻ `<link>`
  + Không dùng plugin `style-loader` với `mini-css-extract-plugin`. Nếu đang dùng `style-loader` thì xóa nó đi, 2 cái này xung đột với nhau
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

**Bài 3:** 2 bài trên config file CSS  và JS, phải chỉnh đường dẫn bằng tay. Trong bài này hãy config ra file HTML dựa trên 1 file HTML mẫu để khi build ra thu được file như mục ở trên. Ta thêm plugin vào trong module export
```js
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html'
    })
```

**Bài 4:** Có 1 vấn đề nữa: Khi dùng webpack, tất cả đoạn code CSS sẽ được nén lại vào trong 1 file duy nhất --> điều này giúp giảm Request đến Server nhưng thay vào  các thuật toán nén sẽ khiến cho file càng được bảo mật. Cần khôi phục đoạn code CSS về tình trạng ban đầu, các file riêng