import { defineConfig, globalIgnores } from 'eslint/config'

export const defaultIgnores = globalIgnores([
  'node_modules/**',
  'dist/**',
  '.next/**',
  'build/**',
  'coverage/**',
  'out/**',
  'next-env.d.ts',
])

// @TODO: Add check that rules exist.
// @TODO: Write test to see if style is consistent between upgrades.
export const defaultRules = defineConfig([
  {
    rules: {
      'array-bracket-newline': ['error', 'consistent'],
      'array-element-newline': ['error', 'consistent'],

      //
      // Disable rules provided by other configs
      //
      'no-unused-vars': 'off', // Provided by TypeScript
      'no-undef': 'off', // Provided by TypeScript
      'no-void': 'off',
      'max-len': 'off', // Enforces for everything, we still want to keep it for long strings and other edge cases.
      'arrow-body-style': 'off', // Provided by Prettier
      'prefer-arrow-callback': 'off', // Provided by Prettier
    },
  },
])
