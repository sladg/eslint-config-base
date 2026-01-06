import { defineConfig } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import type { Config as PrettierConfig } from 'prettier'

const conf: PrettierConfig = {
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

export const prettierConfig = defineConfig(
  [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      plugins: {
        prettier: eslintPluginPrettier,
      },
      rules: {
        //
        // Allow eslint to use prettier internally for formatting.
        //
        'prettier/prettier': [
          'error',
          {
            ...conf,
          },
          {
            usePrettierrc: false,
          },
        ],
      },
    },
  ],
  // Prettier config (disables conflicting rules)
  eslintConfigPrettier,
)
