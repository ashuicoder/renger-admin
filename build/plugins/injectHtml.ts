import simpleHtmlPlugin from 'vite-plugin-simple-html'

export function setupInjectHtmlPlugin(viteEnv: ImportMetaEnv) {
  return simpleHtmlPlugin({
    inject: {
      data: {
        title: viteEnv.VITE_APP_TITLE,
      },
    },
  })
}
