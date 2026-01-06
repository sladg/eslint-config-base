import { defineConfig } from 'eslint/config'
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets'

export const secretsConfig = defineConfig([
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    plugins: {
      'no-secrets': eslintPluginNoSecrets,
    },
    rules: {
      'no-secrets/no-secrets': ['error', { tolerance: 4.5 }],
    },
  },
])
