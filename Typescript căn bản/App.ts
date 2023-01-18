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