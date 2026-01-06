import { defineConfig } from 'eslint/config'
import globals from 'globals'

import { defaultIgnores, defaultRules } from '../core'
import { importsConfig } from '../core/imports'
import { prettierConfig } from '../core/prettier'
import { secretsConfig } from '../core/secrets'
import { sonarjsConfig } from '../core/sonarjs'
import { typescriptConfig } from '../core/typescript'

/**
 * Node.js ESLint configuration.
 * Includes Node.js globals and base rules.
 */
export const nodeConfig = defineConfig([
  defaultRules,
  typescriptConfig,
  prettierConfig,
  importsConfig,
  secretsConfig,
  sonarjsConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.builtin,
      },
    },
  },
  defaultIgnores,
])

export default nodeConfig
