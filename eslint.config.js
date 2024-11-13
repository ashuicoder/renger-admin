import path from 'node:path'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import { includeIgnoreFile } from '@eslint/compat'
import { fileURLToPath } from 'node:url'
import autoImport from './.eslintrc-auto-import.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')
const prettierignorePath = path.resolve(__dirname, '.prettierignore')
export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    ignores: ['.vscode', 'node_modules', '*.md', '*.woff', '*.ttf', '.idea', 'dist', '.husky'],
    files: ['**/*.{js,ts,mjs,mts,cjs,cts,jsx,tsx,vue}'],
    languageOptions: {
      globals: {
        ...autoImport.globals,
      },
    },
  },

  // 忽略 .gitignore 和 .prettierignore钟de
  includeIgnoreFile(gitignorePath),
  includeIgnoreFile(prettierignorePath),

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  skipFormatting,

  {
    name: 'custom-rules',
    rules: {
      'no-undef': 'error',
    },
  },
]
