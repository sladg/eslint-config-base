import { defineConfig } from 'eslint/config'
import eslintConfigNext from 'eslint-config-next/core-web-vitals'
import eslintConfigNextTs from 'eslint-config-next/typescript'

import { defaultIgnores, defaultRules } from '../core'
import { importsConfig } from '../core/imports'
import { prettierConfig } from '../core/prettier'
import { secretsConfig } from '../core/secrets'
import { sonarjsConfig } from '../core/sonarjs'
import { tailwindConfig } from '../core/tailwind'
import { typescriptConfig } from '../core/typescript'

/**
 * Next.js/React ESLint configuration.
 * Includes browser globals, React Hooks rules, Next.js rules, and TailwindCSS support.
 */
export const nextConfig = defineConfig([
  defaultRules,
  typescriptConfig,
  prettierConfig,
  importsConfig,
  tailwindConfig,
  secretsConfig,
  sonarjsConfig,
  // reactConfig,
  ...eslintConfigNext,
  eslintConfigNextTs,
  defaultIgnores,
  // {
  //   files: ['**/*.{js,jsx,ts,tsx}'],
  //   plugins: {
  //     '@next/next': nextPlugin,
  //   },
  //   rules: {
  //     ...nextPlugin.configs.recommended.rules,
  //   },
  // },
])

export default nextConfig
