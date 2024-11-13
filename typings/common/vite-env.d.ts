/// <reference types="vite/client" />

type ConfigType = 'Y' | 'N'

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_UNPLUGIN_AUTO_IMPORT_ENABLE: ConfigType
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
