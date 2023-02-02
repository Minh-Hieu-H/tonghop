# Các thư viện hỗ trợ thao tác với API
## XMLHttp Request
XMLHttpRequest(XHR) là 1 API cũ hơn và được sử dụng trong các trình duyệt cũ. Nó có khả năng gửi và nhận dữ liệu từ máy chủ mà không cần tải lại trang web. Đặc điểm của XHR bao gồm:
1.  Sử dụng chế độ tải về để gửi và nhận dữ liệu từ máy chủ, cho phép ứng dụng web cập nhật dữ liệu mà không cần phải tải lại trang web
2.  Hỗ trợ các giao thức: XHR hỗ trợ các giao thức như HTTP, và HTTPS
3.  Hỗ trợ các kiểu dữ liệu: Dữ liệu văn bản, hình ảnh, âm thanh và dữ liệu JSON
4.  Sử dụng JavaScript: XHR sử dụng JavaScript để gửi và nhận dữ liệu từ máy chủ
5.  Hỗ trợ các trình duyệt cũ như IE
## FetchAPI 
Đặc điểm của FetchAPI là 1 API mới hơn so với XMLHttp Request, cung cấp cách gửi và nhận dữ liệu đến máy chủ. Đặc điểm của nó bao gồm
1. Sử dụng cấu trúc Promises: sử dụng cấu trúc này để xử lý các yêu cầu từ máy chủ
2. Hỗ trợ các giao thức: Trong đó có cả HTTP và HTTPS
3. Sử dụng ngôn ngữ JavaScript
4. Hỗ trợ các trình duyệt mới như : Chrome, FireFox, Safari
5. Tự động parse JSON: có khả năng **tự động parse dữ liệu JSON** từ máy chủ 
6. Bổ sung thêm tiện ích cho request header: FetchAPI cung cấp thêm các tiện ích cho request header, cho phép gửi thêm thông tin và điều kiện cho máy chủ xử lý