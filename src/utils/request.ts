import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
  baseURL: '/api',
  timeout: 5000
})

request.interceptors.request.use((config) => {
  // config 是配置对象，一定要返回
  return config
})

request.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  // 处理 request 网络错误
  const status = error.response.status
  switch (status) {
  case 401:
    ElMessage({ type: 'error', message: error.message })
    break
  case 404:
    ElMessage({ type: 'error', message: error.message })
    break
  case 500 | 502 | 503 | 504:
    ElMessage({ type: 'error', message: error.message })
    break
  }
  return Promise.reject(new Error(error.message))
})

export {
  request
}
