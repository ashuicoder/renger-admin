import axios from 'axios'
import Request from './request'
import { router } from '@/router'
import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores'

const baseUrl = import.meta.env.VITE_APP_BASE_URL

const CancelToken = axios.CancelToken
const source = CancelToken.source()

const requestInterceptor = (config: AxiosRequestConfig) => {
  const authStore = useAuthStore()
  const token = authStore.token
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
  }
  return config as InternalAxiosRequestConfig
}

const requestInterceptorCatch = (err: Error) => {
  return Promise.reject(new Error(err.message || '请求失败啦～'))
}

const responseInterceptor = (result: AxiosResponse) => {
  const authStore = useAuthStore()
  const realData: Api.Response.Base = result.data
  if (result.status !== 200) {
    return Promise.resolve(realData.msg)
  }

  if (realData.code === '000000') {
    return Promise.resolve(realData.data)
  } else if (realData.code === '401') {
    window.$message.error('登录超时')
    source.cancel()
    authStore.resetUserAction()
    router.replace('/login')
    return Promise.reject(new Error('未登录'))
  } else {
    window.$message.error(realData.msg || '请求超时')
    return Promise.reject(new Error(realData.msg || '请求失败'))
  }
}

const responseInterceptorCatch = (err: Error) => {
  // 这里使用自定义来提示错误
  window.$message.error(err.message || '请求失败')
  return Promise.reject(new Error(err.message || '请求失败啦～'))
}

const requestIncetance = new Request({
  baseURL: baseUrl,
  timeout: 10e4,
  requestInterceptor,
  requestInterceptorCatch,
  responseInterceptor,
  responseInterceptorCatch,
})

export default requestIncetance
