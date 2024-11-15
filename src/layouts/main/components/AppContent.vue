<template>
  <n-layout-content
    :native-scrollbar="false"
    position="absolute"
    :style="{ top: `${config.headerHeight}px`, bottom: 0 }"
    content-style="padding: 24px;"
  >
    <router-view></router-view>
  </n-layout-content>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/stores'
import { storeToRefs } from 'pinia'

const systemStore = useSystemStore()
const { config } = storeToRefs(systemStore)
</script>

<style scoped></style>
