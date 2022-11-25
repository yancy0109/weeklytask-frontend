
import axios from "axios"
import router from "../main"

const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

// 携带cookie
myAxios.defaults.withCredentials = true


// 添加请求拦截器
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求了', config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
myAxios.interceptors.response.use(function (response) {
    console.log('我受到你的响应了', response)
    // 对响应数据做点什么
    if (response.data.code == Number(40101) ){
        router.push({
            path: "/user/login",
            replace: true
        })
    }
    // 直接返回数据
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default myAxios