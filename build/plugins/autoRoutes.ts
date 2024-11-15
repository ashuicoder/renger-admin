import type { PluginOption } from 'vite'
export function setupAutoRoutesPlugin(): PluginOption {
  return autoRoutePlugin()
}

function autoRoutePlugin(): PluginOption {
  return {
    name: 'vite-plugin-vue3-routes',
    buildStart() {
      console.log('build start')
    },
  }
}
