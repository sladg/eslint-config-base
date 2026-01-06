import { defineConfig } from 'eslint/config'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'

export const reactConfig = defineConfig([
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
