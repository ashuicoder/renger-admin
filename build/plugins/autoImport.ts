import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import type { PluginOption } from 'vite'
export function setupAutoImportPlugin() {
  const plugins: PluginOption = [
    AutoImport({
      dts: './typings/app/auto-imports.d.ts',
      imports: [
        'vue',
        'vue-router',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.js',
      },
    }),
    Components({
      dts: './typings/app/components.d.ts',
      resolvers: [NaiveUiResolver()],
    }),
  ]
  return plugins
}
