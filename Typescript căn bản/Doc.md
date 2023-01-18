# Typescript và các kiến thức cơ bản

## TypeScript là gì

Là 1 dự án mã nguồn mở được phát triển bởi MS, là 1 phiên bản nâng cao hơn của JavaScript với việc bổ sung tỳ chọn các kiểu tĩnh
TypeScript sử dụng tất cả tính năng của ECMAScript 2015 như Class, module

## Tại sao nên sử dụng TypeScript ?

1. Dễ phát triển dự án
2. Hỗ trợ nhiều framewỏk

## Cài đặt

1. Chạy lệnh sau để install

```
npm install -g typescript
```
2. Compile:
```
tsc app.ts
```
## Cơ bản về TypeScript

### Basic Type
```ts
// booloean
var isDone: boolean = true;
// String
var name1 : string = "Nguyễn Minh  Hiếu"
// Number
var number1 = 1
//  Undefined
let und1 : undefined = undefined
//  Any
let person:any
person.name = "Hieu"
person.age =10
person =false
//  Object
let user1 : { 
    name2 : string
    color?: string
}={
    name2:"Nguyễn Văn Nam"}
// Array
var arr1 :[number] = [1]
var arr2 = ["Hieu", 1]
var arr3 = ["Hieu",2]
let numberArr : number[] = [1,2,3,4]

//  Function
// Func
const sum = (num1:number,num2:number):number =>  {
    return num1 + num2
} 
// Arrow Func
const sub2: (num1:number, num2:number) => number = (
    num1:number,
    num2: number
) => num1-num2
// Void
const handle =()=> {
    console.log("123")
}
//  Các kiểu dữ liệu khác
```
