import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export const typescriptConfig = defineConfig([
  tseslint.configs.eslintRecommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    rules: {
      //
      // Disable opinionated rules from @typescript-eslint
      //

      '@typescript-eslint/member-delimiter-style': 'off', // Provided by Prettier
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'off', // Use TS compiler option instead

      //
      // Disable importing banned packages.See: https://usertech.atlassian.net/wiki/spaces/DEV/pages/3003154445/Banned+packages
      //
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-final-form',
              message: 'Use hook form instead of final form',
            },
            {
              name: 'moment',
              message: 'Use day.js instead of moment',
            },
            {
              name: 'date-fns',
              message: 'Use day.js instead of date-fns',
            },
            {
              name: 'ramda',
              message: 'Use lodash instead of ramda',
            },
            {
              name: 'rxjs',
              message: 'Stay away from RXJS!',
            },
            {
              name: 'jquery',
              message: 'Use vanilla JS instead of jQuery',
            },
            {
              name: 'lerna',
              message: 'Use turborepo workspaces instead of lerna',
            },
            {
              name: 'yarn',
              message: 'Use npm instead of yarn',
            },
            {
              name: 'ts-node',
              message: 'Use tsx instead of ts-node',
            },
            {
              name: 'tslint',
              message: 'Use eslint instead of tslint',
            },
            {
              name: 'prettier',
              message: 'Use eslint instead of prettier',
            },
            {
              name: 'aws-sdk',
              message: 'Use @aws-sdk/client-* instead of aws-sdk',
            },
            {
              name: 'uuid',
              message: 'Use native randomUUID() instead of uuid',
            },
            {
              name: 'classnames',
              message:
                'Use clsx instead of classnames as its smaller and faster',
            },
          ],
          patterns: [
            {
              group: ['@lingui/*'],
              message: 'Use next-intl instead of lingui',
            },
          ],
        },
      ],
    },
  },
])
