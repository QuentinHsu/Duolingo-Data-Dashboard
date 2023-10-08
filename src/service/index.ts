import createAxiosInstance from '@/service/axios-instance'
export const api = createAxiosInstance('http://127.0.0.1:8787')
// 修改默认的请求超时时间
api.defaults.timeout = 15000
// 修改默认的 Content-Type
api.defaults.headers['Content-Type'] = 'application/json'
