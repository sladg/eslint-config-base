/** @type {import('eslint').Linter.Config} */
module.exports = {
  ...require('./dist/node/index.cjs'),
  ignorePatterns: ['dist/**'],
  rules: {
    ...require('./dist/node/index.cjs').rules,
    '@typescript-eslint/no-restricted-imports': 'warn',
  },
}
