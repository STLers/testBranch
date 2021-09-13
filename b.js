var a = 1
var b = 2.0
var c = 3
import axios from 'axios'
const instance = axios.create({
    baseURL: 'xxx',
    timeout: 100
})
instance.interceptors.request.use(req => {
    return req
}, err => {
    return Promise.reject(err)
})
instance.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})