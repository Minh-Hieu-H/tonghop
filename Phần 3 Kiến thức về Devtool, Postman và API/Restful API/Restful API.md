# REST
## REST là gì
**REST** viết tắt của **RE**presentational **S**tate **T**ransfer, là quy ước sử dụng khi thiết kế 1 hệ thống mạng. REST cho phép client tương tác vớii dữ liệu trên máy chủ mà không cần chú ý đến những gì tồn tại trên đó.
## API là gì
**API** là cơ chế cho phép 2 thành phần phần mềm giao tiếp với nhau bằng 1 tập hợp các định nghĩa và giao thức khác nhau 
**Ví dụ ** : Phần mềm dự báo thời tiết giao tiếp giữa dữ liệu thời tiết trên server và sự hiển thị trên giao diện người dùng 
## Restful API là gì ?
**Restful API** là 1 kiểu API hoạt động dựa trên giao thức HTTP, được sử dụng để xây dựng hệ thống trao đổi dữ liệu. API hoạt động dựa trên mô hình(chuẩn) REST, sử dụng các phương thức (GET, POST, PUT, DELETE) để thực hiện các hoạt động (CRUD) dữ liệu 
## Ý nghĩa của các giao thức HTTP được sử dụng ?
Tự tìm hiểu

## Một số lưu ý khi xây dựng Restful API 
Ví dụ:
- Sử dụng id định danh thay vì sử dụng query-string
  - **Nên**: `users/123`
  - **Không nên**: `api?type=users&id=123`
- Thiết kế cho người **sử dụng** không phải thiết kế cho dữ liệu, đảm bảo dễ đọc,URL ngắn
- Nên xây dựng URL hợp logic, ví dụ để lấy 1 thông tin 1 người  trong 1 nhóm người, `users` biểu thị nhóm người

## Các trạng thái trả về của HTTP Response 
Trạng thái trả về của HTTP Response thực chất là những mã số dùng để biểu thị tình trạng của 1 yêu cầu HTTP. Một số mã trả về có thể là 2xx, 3xx,4xx, 5xx. Trong đó 
- **2XX(Succesfull)**: Thường biểu thị trạng thái thành công của 1 Resquest
- **3XX(Redirection)**: Thường biểu thị rằng yêu cầu cần được chuyển hướng đến 1 địa chỉ khác 
- **4XX(Client Error)**: Lỗi này thường biểu thị rằng những Request của bên phía Client lỗi. Ví dụ như 401 Bad Request, 402 Unathorized, 403 Forbidden.
- **5XX(Server Error)**: Lỗi này thường biểu thị xảy ra bên Server khi máy chủ không thể xử lý các yêu cầu. Ví dụ 500 Internal Server Error, 503 Service Unavailable 

## Việc giao tiếp giữa Client và Server qua API ?
**Json** là kiểu dữ liệu phổ biến tiện dụng được sử dụng cho server và Client. Cụ thể Server trả về Json qua API. Còn Client sẽ thao tác với dữ liệu đó