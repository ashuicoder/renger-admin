<template>
  <n-layout-sider
    :native-scrollbar="false"
    bordered
    :width="config.leftAsideWidth"
    :collapsed-width="64"
    collapse-mode="width"
    :collapsed="config.asideCollapsed"
  >
    <n-layout-header
      :style="{ height: `${config.headerHeight}px` }"
      bordered
      class="flex items-center justify-center whitespace-nowrap"
    >
      <n-text type="primary" class="text-xl"> rengar-admin</n-text>
    </n-layout-header>
    <n-layout-content
      :native-scrollbar="false"
      position="absolute"
      style="left: 0; top: 64px; bottom: 0"
      content-style="padding: 24px;"
    >
      <div>111</div>
    </n-layout-content>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/stores'
import { storeToRefs } from 'pinia'

const systemStore = useSystemStore()
const { config } = storeToRefs(systemStore)
</script>

<style scoped></style>
