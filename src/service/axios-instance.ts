import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

// 创建 axios 实例的辅助函数
const createAxiosInstance = (baseURL: string): AxiosInstance => {
  // 创建 axios 实例
  const instance = axios.create({
    baseURL,
    timeout: 5000, // 请求超时时间
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // 请求拦截器
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 在发送请求之前做些什么
      return config
    },
    error => {
      // 处理请求错误
      return Promise.reject(error)
    }
  )
  // 响应拦截器
  instance.interceptors.response.use(
    response => {
      // 对响应数据做些什么
      return response
    },
    error => {
      if (error.message === 'Network Error') {
        // @ts-ignore
        window.$message?.warning(error.message)
      } else {
        // @ts-ignore
        window.$message.warning(error.response?.data || '')
      }
      return Promise.reject(error)
    }
  )
  return instance
}
export default createAxiosInstance
