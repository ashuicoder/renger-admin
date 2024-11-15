import { fileURLToPath, URL } from 'node:url'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import { setupPlugins } from './build/plugins'

// https://vite.dev/config/
export default defineConfig((configEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as unknown as ImportMetaEnv
  return {
    server: {
      port: 9527,
      host: true,
    },
    plugins: setupPlugins(viteEnv),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        api: fileURLToPath(new URL('./src/api/modules', import.meta.url)),
      },
    },
  }
})
