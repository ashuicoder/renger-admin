import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { setupAutoImportPlugin } from './autoImport'
import { setupInjectHtmlPlugin } from './injectHtml'
import { setupAutoRoutesPlugin } from './autoRoutes'
import Inspect from 'vite-plugin-inspect'

import type { PluginOption } from 'vite'

export function setupPlugins(viteEnv: ImportMetaEnv) {
  const plugins: PluginOption = [
    vue(),
    vueJsx(),
    vueDevTools(),
    Inspect(),
    setupAutoRoutesPlugin(),
    ...setupAutoImportPlugin(viteEnv),
    setupInjectHtmlPlugin(viteEnv),
  ]

  return plugins
}
