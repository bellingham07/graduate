import axios from 'axios'

export const request = axios.create({
    baseURL: 'http://127.0.0.1:8096',

})

request.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        config.headers = {
            'Authorization': 'Bearer' + localStorage.getItem('token'), //携带权限参数
            'Content-Type': 'multipart/form-data'
        };
    }
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.log(error)
    return Promise.reject(error)
})

export default request