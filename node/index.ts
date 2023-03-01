import { defaultIgnorePatterns, defaultRules, defaultExtends, defaultParser, defaultPlugins, ESLintConfig } from "../core"

const config: ESLintConfig = {
  parser: defaultParser,
  extends: [...defaultExtends],
  plugins: [...defaultPlugins],
  ignorePatterns: defaultIgnorePatterns,
  env: {
    commonjs: true,
    node: true,
  },
  rules: {
    ...defaultRules,
  },
}

module.exports = config
