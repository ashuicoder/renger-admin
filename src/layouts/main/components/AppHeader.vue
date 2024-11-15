<template>
  <n-layout-header
    bordered
    :style="{ height: `${config.headerHeight}px` }"
    class="flex items-center px-4"
  >
    <n-button
      text
      :style="{ fontSize: `${config.headerIconSize}px` }"
      @click="systemStore.toggleAsideCollapsed"
    >
      <n-icon>
        <AlignRightOutlined v-if="config.asideCollapsed" />
        <AlignLeftOutlined v-else />
      </n-icon>
    </n-button>
    <div class="flex-1 min-w-0"></div>

    <div class="flex">
      <n-button
        text
        :style="{ fontSize: `${config.headerIconSize}px` }"
        @click="systemStore.toggleFullscreen"
      >
        <n-icon>
          <FullscreenExitOutlined v-if="config.isFullscreen"></FullscreenExitOutlined>
          <FullscreenOutlined v-else></FullscreenOutlined>
        </n-icon>
      </n-button>

      <n-button
        text
        :style="{ fontSize: `${config.headerIconSize}px` }"
        style="margin-left: 14px"
        @click="systemStore.toggleTheme"
      >
        <n-icon>
          <Brightness4Sharp v-if="config.theme === 'dark'"></Brightness4Sharp>
          <Brightness5Sharp v-else-if="config.theme === 'light'"></Brightness5Sharp>
          <BrightnessAutoSharp v-else></BrightnessAutoSharp>
        </n-icon>
      </n-button>
    </div>
  </n-layout-header>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/stores'
import { storeToRefs } from 'pinia'
import {
  AlignLeftOutlined,
  AlignRightOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@vicons/antd'

import { Brightness5Sharp, Brightness4Sharp, BrightnessAutoSharp } from '@vicons/material'

const systemStore = useSystemStore()
const { config } = storeToRefs(systemStore)
</script>

<style scoped></style>
