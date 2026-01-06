import { defineConfig } from 'eslint/config'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports'

export const importsConfig = defineConfig([
  {
    plugins: { import: eslintPluginImport },
    rules: {
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      // Ensure we are sorting imports across files.
      // Certain sorting is important for refactorings as it makes mess everywhere unless checked.
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$'],
            // Side effect imports.
            ['^\\u0000'],
            // Node.js builtins prefixed with `node:`.
            ['^node:'],
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^@?\\w'],
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything not matched in another group.
            ['^@fllite-fe/*'],
            ['^'],
            // Relative imports.
            // Anything that starts with a dot.
            ['^\\.'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
  {
    plugins: {
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      // Enable auto-fix of unused imports and warning for unused variables (extra on top of TS Compiler to allow auto-fix)
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
])
