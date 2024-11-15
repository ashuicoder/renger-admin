import { defineStore } from 'pinia'
import { useFullscreen } from '@vueuse/core'

export const useSystemStore = defineStore('system', () => {
  const theme = ['light', 'dark', 'auto']
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen(
    document.querySelector('#app') as HTMLElement,
  )
  const config = reactive({
    leftAsideWidth: 240,
    headerHeight: 56,
    asideCollapsed: false,
    isFullscreen,
    theme: theme[0],
    headerIconSize: 20,
  })

  function toggleAsideCollapsed() {
    config.asideCollapsed = !config.asideCollapsed
  }

  function toggleTheme() {
    const index = theme.indexOf(config.theme) + 1
    config.theme = theme[index % theme.length]
  }

  return {
    config,
    toggleAsideCollapsed,
    toggleFullscreen,
    toggleTheme,
  }
})
