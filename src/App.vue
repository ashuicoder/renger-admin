<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
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
import { zhCN, dateZhCN } from 'naive-ui'

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
</script>

<style scoped></style>
