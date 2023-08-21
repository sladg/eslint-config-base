import type { Linter } from 'eslint'
import type { Config as PrettierConfig } from 'prettier'

export type ESLintConfig = Linter.Config

export const defaultIgnorePatterns: ESLintConfig['ignorePatterns'] = [
  'node_modules/**',
]

export const defaultParser: ESLintConfig['parser'] = '@typescript-eslint/parser'

export const defaultExtends = ['prettier']

export const defaultPlugins = [
  'prettier',
  '@typescript-eslint',
  'unused-imports',
  'simple-import-sort',
  'import',
  'sonarjs',
]

const prettierConfig: PrettierConfig = {
  tabWidth: 2,
  // printWidth: 120, // Commented out as it would cause too many errors for people implementing it. This is very opinionated option.
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  semi: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  quoteProps: 'consistent',
  useTabs: false,
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'preserve',
}

// @TODO: Add check that rules exist.
// @TODO: Write test to see if style is consistent beween upgrades.
export const defaultRules: ESLintConfig['rules'] = {
  //
  // Allow eslint to use prettier internally for formatting.
  //
  'prettier/prettier': [
    'error',
    {
      ...prettierConfig,
    },
    {
      usePrettierrc: false,
    },
  ],

  'array-bracket-newline': ['error', 'consistent'],
  'array-element-newline': ['error', 'consistent'],

  //
  // Disable rules provided by other configs
  //

  'no-unused-vars': 0, // Provided by TypeScript
  'no-undef': 0, // Provided by TypeScript
  'no-void': 0,
  'max-len': 0, // Enforces for eveything, we still want to keep it for long strings and other edge cases.
  'arrow-body-style': 0, // Provided by Prettier
  'prefer-arrow-callback': 0, // Provided by Prettier

  //
  // Disable opinionated rules from @typescript-eslint
  //

  '@typescript-eslint/member-delimiter-style': 0, // Provided by Prettier
  '@typescript-eslint/interface-name-prefix': 0,
  '@typescript-eslint/no-explicit-any': 0,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/no-use-before-define': 0,
  '@typescript-eslint/no-non-null-assertion': 0,
  '@typescript-eslint/no-unused-vars': 0, // Use TS compiler option instead

  // Disable importing banned packages. See: https://usertech.atlassian.net/wiki/spaces/DEV/pages/3003154445/Banned+packages
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
          message: 'Use clsx instead of classnames as its smaller and faster',
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

  // Sonar's configuration. Sniff codesmells and report them as errors.
  // This is Sonar's recommended list (taken from plugin:sonarjs/recommended) & some of our own.
  'sonarjs/cognitive-complexity': ['error', 20],
  'sonarjs/no-duplicate-string': ['error', { threshold: 5 }], // Increased from 3 to 8.
  'sonarjs/no-collapsible-if': 'error',
  'sonarjs/no-collection-size-mischeck': 'error',
  'sonarjs/elseif-without-else': 'error', // Rule to enforce `else` in case `else if` is used.
  'sonarjs/no-duplicated-branches': 'warn', // kinda specific, not used mostly
  'sonarjs/no-element-overwrite': 'error',
  'sonarjs/no-empty-collection': 'off', // Sometimes, we push to empty collections and want to itterate even if empty.
  'sonarjs/no-extra-arguments': 'error', // Extra arguments are not allowed for functions.
  'sonarjs/no-gratuitous-expressions': 'error',
  'sonarjs/no-identical-conditions': 'error',
  'sonarjs/no-identical-expressions': 'error',
  'sonarjs/no-identical-functions': 'off', // Hard to comply by for big components and functions.
  'sonarjs/no-inverted-boolean-check': 'error', // makes reading confusing as hell
  'sonarjs/no-nested-switch': 'error',
  'sonarjs/no-nested-template-literals': 'warn', // For styled-components and similar, it's hard to avoid.
  'sonarjs/no-one-iteration-loop': 'error',
  'sonarjs/no-redundant-boolean': 'error',
  'sonarjs/no-redundant-jump': 'error',
  'sonarjs/no-same-line-conditional': 'error',
  'sonarjs/no-small-switch': 'error', // use If-ElseIf-Else instead
  'sonarjs/no-unused-collection': 'error',
  'sonarjs/no-use-of-empty-return-value': 'error',
  'sonarjs/no-useless-catch': 'error',
  'sonarjs/non-existent-operator': 'error',
  'sonarjs/prefer-immediate-return': 'off', // For debugging and development, better to have a breakpoint.
  'sonarjs/prefer-object-literal': 'error', // we don't want to use new Object() or Object.assign() for creating objects.
  'sonarjs/prefer-single-boolean-return': 'error',
  'sonarjs/no-ignored-return': 'error',

  // Ensure we are sorting imports across files.
  // Certain sorting is important for refactorings as it makes mest everywhere unless checked.
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
  'import/first': 'error',
  'import/newline-after-import': 'error',
  'import/no-duplicates': 'error',

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
}
