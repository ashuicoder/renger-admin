declare namespace Api {
  namespace Response {
    interface Base {
      code: string | number
      msg?: string
      data?: any
    }
  }

  namespace Auth {}
}
