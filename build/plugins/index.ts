import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import { setupAutoImportPlugin } from './autoImport'

import type { PluginOption } from 'vite'

export function setupPlugins() {
  const plugins: PluginOption = [vue(), vueJsx(), vueDevTools(), ...setupAutoImportPlugin()]

  return plugins
}
