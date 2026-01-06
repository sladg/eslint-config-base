import { defineConfig } from 'eslint/config'
import eslintPluginSonarjs from 'eslint-plugin-sonarjs'

// Sonar's configuration. Sniff codesmells and report them as errors.
export const sonarjsConfig = defineConfig([
  {
    plugins: { sonarjs: eslintPluginSonarjs },
    rules: {
      // This is Sonar's recommended list (taken from plugin:sonarjs/recommended) & some of our own.
      'sonarjs/cognitive-complexity': ['error', 20],
      'sonarjs/no-duplicate-string': ['error', { threshold: 5 }], // Increased from 3 to 8.
      'sonarjs/no-collapsible-if': 'error',
      'sonarjs/elseif-without-else': 'error', // Rule to enforce `else` in case `else if` is used.
      'sonarjs/no-duplicated-branches': 'warn', // kinda specific, not used mostly
      'sonarjs/no-element-overwrite': 'error',
      'sonarjs/no-empty-collection': 'off', // Sometimes, we push to empty collections and want to iterate even if empty.
      'sonarjs/no-gratuitous-expressions': 'error',
      'sonarjs/no-identical-conditions': 'error',
      'sonarjs/no-identical-expressions': 'error',
      'sonarjs/no-identical-functions': 'off', // Hard to comply by for big components and functions.
      'sonarjs/no-inverted-boolean-check': 'error', // makes reading confusing as hell
      'sonarjs/no-nested-switch': 'error',
      'sonarjs/no-nested-template-literals': 'warn', // For styled-components and similar, it's hard to avoid.
      'no-unreachable-loop': 'error', // Replaced sonarjs/no-one-iteration-loop (removed in v3)
      'sonarjs/no-redundant-boolean': 'error',
      'sonarjs/no-redundant-jump': 'error',
      'sonarjs/no-same-line-conditional': 'error',
      'sonarjs/no-small-switch': 'error', // use If-ElseIf-Else instead
      'sonarjs/no-unused-collection': 'error',
      'sonarjs/no-use-of-empty-return-value': 'error',
      'sonarjs/no-useless-catch': 'error',
      'sonarjs/prefer-immediate-return': 'off', // For debugging and development, better to have a breakpoint.
      'sonarjs/prefer-object-literal': 'error', // we don't want to use new Object() or Object.assign() for creating objects.
      'sonarjs/prefer-single-boolean-return': 'error',
    },
  },
])
