import './assets/styles/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { router } from './router'
import App from './App.vue'
import { AppLoading } from './components/AppLoading'

function setupApp() {
  // 处理tailwind和naive-ui样式冲突
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)

  // 应用首次加载效果
  const appLoading = createApp(AppLoading)
  appLoading.mount('#app-loading')

  const app = createApp(App)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
}

setupApp()
