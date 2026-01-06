import eslintPluginReactNative from '@react-native/eslint-plugin'
import { defineConfig } from 'eslint/config'
import eslintPluginExpo from 'eslint-plugin-expo'
import globals from 'globals'

import { defaultIgnores, defaultRules } from '../core'
import { importsConfig } from '../core/imports'
import { prettierConfig } from '../core/prettier'
import { reactConfig } from '../core/react'
import { secretsConfig } from '../core/secrets'
import { sonarjsConfig } from '../core/sonarjs'
import { tailwindConfig } from '../core/tailwind'
import { typescriptConfig } from '../core/typescript'

/**
 * React Native/Expo ESLint configuration.
 * Includes mobile-specific globals, React Hooks rules, and React Native rules.
 */
export default defineConfig([
  defaultRules,
  typescriptConfig,
  prettierConfig,
  importsConfig,
  tailwindConfig,
  secretsConfig,
  sonarjsConfig,
  reactConfig,
  {
    plugins: {
      '@react-native': eslintPluginReactNative,
      'expo': eslintPluginExpo,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        // React Native specific globals
        __DEV__: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
        navigator: 'readonly',
      },
    },
    rules: {
      // React Native rules
      '@react-native/platform-colors': 'error',
      // Expo rules
      'expo/no-env-var-destructuring': 'warn',
      'expo/no-dynamic-env-var': 'warn',
    },
  },
  defaultIgnores,
])
