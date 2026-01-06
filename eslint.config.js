import { defineConfig } from 'eslint/config'

import nodeConfig from './dist/node/index.js'
import jsonConfig from './dist/optional/json/index.js'

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  nodeConfig,
  jsonConfig,
  {
    rules: {
      '@typescript-eslint/no-restricted-imports': 'warn',
      '@typescript-eslint/no-restricted-imports': 'off',
    },
  },
])
