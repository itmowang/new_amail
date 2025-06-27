/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios' 
 
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
 
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 320000,
})
  
axiosInstance.interceptors.request.use((config) => {
  // 在请求发送之前做一些处理，比如添加token等
 
  return config
})

axiosInstance.interceptors.response.use(
  (response: any) => {
    // 在响应成功返回之前做一些处理
    return response
  },
  (error) => {
    if (error.response.status === 400) {
      
      return Promise.reject({ message: error.response.data })
    }
    if (error.response.status === 401) {
        return Promise.reject({ message: error.response.data })
    }
    if (error.response.status === 403) {
      
      return Promise.reject({ message: error.response.data })
    }
    if (error.response.status === 404) {
      
      return Promise.reject({ message: error.response.data })
    }
    if (error.response.status === 500) {
      
      return Promise.reject({ message: error.response.data })
    }
    if (error.response.status === 503) {
      
      return Promise.reject({ message: error.response.data })
    }
    // 在响应错误返回之前做一些处理
    return Promise.reject(error)
  },
)

export default axiosInstance
