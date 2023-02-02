// const xhttp = new XMLHttpRequest()
// xhttp.onreadystatechange =  function () {
//     if(this.readyState ===4 && this.status ===200){
//         const res = JSON.parse(this.responseText)
//         let html = ''
//         res.data.forEach(item => {
//             html += `<div>${item.first_name} ${item.last_name}</div>`
//         });
//         document.getElementById("result").innerHTML= html
//         console.log(res)
//     }
// }
// xhttp.open('GET','https://reqres.in/api/users?page=2',true)
// xhttp.send()

// fetch('https://reqres.in/api/users?page=2')
// .then((res)=> {
//     console.log(res);
//     if(res.ok){
//         return res.json()
//     }else {
//         throw new Error('Loi cmnr')
//     }
// })
// .then((res)=> {
//     let html = ''
//     res.data.forEach((item)=> {
//         html+= `<div>${item.first_name} ${item.last_name}</div>`
//     })
//     document.getElementById('result').innerHTML =html
//     console.log("Chính thức", res)
// })
// .catch((error)=> {
//     console.log('Lỗi', error)
// })


// lấy dữ liệu đơn giản từ API
//  Tạo Post Request
//  Config API
// Instance API
//  Xử lý lỗi cơ bản khi sử dụng Interceptor của Axios

// Lấy dữ liệu đơn giản từ API
axios.get('https://reqres.in/api/user/2')
.then((res)=> {
    //handle success
    console.log(res);
})
.catch((err)=> {
    //handle Error
    console.log(err)
})
.then(()=>{
    console.log("Success")
})
//  Tạo 1 yêu cầu đăng kí tài khoản 
axios.post('https://reqres.in/api/users',
{
    "name":"Hieu",
    "job":"IT"
})
.then ((res)=> {
    console.log(res)
})
.catch((err)=> {
    console.log(err)
})
// Config axios
axios({
    method:'get',
    baseURL:'https://reqres.in/api',
    url:'/users'
})
.then((res)=>{
    console.log("Config axios",res)
})
.catch((err)=>{
    console.log(err)
})
// Sử dụng Interceptor của Axios để xử lý lỗi
const instance = axios.create({
    baseURL: 'https://reqres.in/api',
})
instance.interceptors.response.use(
    (config) => {
      console.log(config)
      return config.data.data
    },

    (error) => {
      if(error.response.status==400){
        return Promise.reject("Thiếu thông tin tài khoản hoặc mật khẩu")
      }

    }
  )
instance.post('/login',
{
    "email": "eve.holt@reqres.in",
   
})
.then((res)=> {
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})