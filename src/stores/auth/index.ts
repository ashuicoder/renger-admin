import { defineStore } from 'pinia'
import to from 'await-to-js'
import { userLogin, userDetail, userLogout, userPassword } from 'api/auth'
import { router } from '@/router'

interface User {
  username: string
  id: string
  avatar: string
  phone: string
}

const tokenKey = 'token'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(sessionStorage.getItem(tokenKey))
  const user = ref<User | null>(null)

  async function loginAction(data: Recordable) {
    const [err, res] = await to<string>(userLogin(data))
    if (err) {
      return Promise.reject(err)
    }
    token.value = res
    sessionStorage.setItem(tokenKey, res)
    return true
  }

  async function detailAction() {
    const [err, res] = await to(userDetail())
    if (err) {
      return Promise.reject(err)
    }
    user.value = res
    return true
  }

  function resetUserAction() {
    sessionStorage.removeItem(tokenKey)
    token.value = ''
    user.value = null
  }

  const isLogin = computed(() => {
    return Boolean(token.value) && Boolean(user.value)
  })

  function loginOutAction() {
    const dialog = window.$dialog.warning({
      title: '温馨提示',
      content: '确定要退出登录吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: async () => {
        dialog.loading = true
        const [err] = await to(userLogout())
        if (err) {
          dialog.loading = false
          return false
        }
        resetUserAction()
        window.$message.success('已退出登录')
        router.replace('/login')
      },
    })
  }

  async function passwordAction(data: Recordable) {
    const [err] = await to(userPassword(data))
    if (err) {
      return Promise.reject(err)
    }
    return true
  }

  return {
    user,
    token,
    resetUserAction,
    loginAction,
    detailAction,
    loginOutAction,
    passwordAction,
    isLogin,
  }
})
