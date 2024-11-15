import axios from 'axios'
import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
} from 'axios'

export interface IRequestConfig extends AxiosRequestConfig {
  requestInterceptor: (config: AxiosRequestConfig) => InternalAxiosRequestConfig
  requestInterceptorCatch?: (error: Error) => Promise<any>
  responseInterceptor: (res: AxiosResponse) => Promise<any>
  responseInterceptorCatch?: (error: Error) => Promise<Error>
}

class Request {
  instance: AxiosInstance
  constructor(config: IRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use(
      config.requestInterceptor,
      config.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      config.responseInterceptor,
      config.responseInterceptorCatch,
    )
  }
  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: any) => {
          resolve(res)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }
}

export default Request
