import createAxiosInstance from '@/service/axios-instance'
export const api = createAxiosInstance('https://www.duolingo.com')
// 修改默认的请求超时时间
api.defaults.timeout = 15000
