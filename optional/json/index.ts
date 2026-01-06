import { defineConfig } from 'eslint/config'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

/**
 * Optional ESLint configuration for JSON files.
 * Provides rules for formatting and sorting package.json and tsconfig.json.
 *
 * Usage:
 * ```js
 * import jsonConfig from '@sladg/eslint-config-base/optional/json'
 * export default [...yourConfig, ...jsonConfig]
 * ```
 */
export default defineConfig([
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    files: ['**/tsconfig.json', '**/tsconfig.*.json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'extends',
            'compilerOptions',
            'references',
            'files',
            'include',
            'exclude',
            'typeAcquisition',
            'tsnode',
            'compileOnSave',
            'watchOptions',
          ],
        },
        {
          pathPattern: '^compilerOptions$',
          order: { type: 'asc' },
        },
      ],
    },
  },
  {
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: [
            'name',
            'version',
            'private',
            'description',
            'keywords',
            'homepage',
            'bugs',
            'repository',
            'license',
            'author',
            'contributors',
            'funding',
            'files',
            'main',
            'type',
            'types',
            'module',
            'browser',
            'bin',
            'man',
            'directories',
            'lib',
            'dist',
            'typings',
            'workspaces',
            'scripts',
            'dependencies',
            'devDependencies',
            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'bundledDependencies',
            'dependenciesMeta',
            'engines',
            'os',
            'cpu',
            'publishConfig',
            'config',
            'sideEffects',
          ],
        },
        {
          pathPattern: '^(?:dev|peer|optional)?Dependencies$',
          order: { type: 'asc' },
        },
        {
          pathPattern: '^outputs$',
          order: { type: 'asc' },
        },
        {
          pathPattern: '^scripts$',
          order: { type: 'asc' },
        },
      ],
    },
  },
])
