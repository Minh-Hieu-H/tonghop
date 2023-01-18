const user = {
    name:'Hieu',
    age:24,
    sex: 'male'
}
//Thay vì viết dài dòng các thuộc tính
// const name  = user.name
// const age = user.age
// const sex = user.sex
// Dùng destructuring làm code ngắn gọn hơn
const  { name, age, sex }=  user 
console.log(name);


const list = [
    1,
    (a,b) => a+b,
]
const [value, func] = list
console.log(func(3,4));