<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme>
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <n-global-style></n-global-style>
            <n-el>
              <router-view></router-view>
            </n-el>
            <naive-provider-content />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN, darkTheme, lightTheme, useOsTheme } from 'naive-ui'
import { useSystemStore } from '@/stores'

const NaiveProviderContent = defineComponent({
  name: 'NaiveProviderContent',
  setup() {
    window.$message = useMessage()
    window.$dialog = useDialog()
    window.$notify = useNotification()
    window.$loadingBar = useLoadingBar()
  },
  render() {
    return h('div')
  },
})

const osTheme = useOsTheme()
const systemStore = useSystemStore()
const theme = computed(() => {
  if (systemStore.config.theme === 'auto') {
    return osTheme.value === 'dark' ? darkTheme : lightTheme
  }
  return systemStore.config.theme === 'dark' ? darkTheme : lightTheme
})
</script>

<style scoped></style>
