import { defaultIgnorePatterns, defaultRules, defaultExtends, defaultParser, defaultPlugins, ESLintConfig } from "../core"

const config: ESLintConfig = {
  parser: defaultParser,
  extends: [...defaultExtends, "plugin:@next/next/recommended"],
  plugins: [...defaultPlugins],
  ignorePatterns: defaultIgnorePatterns,
  env: {
    commonjs: true,
    browser: true,
  },
  rules: {
    ...defaultRules,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}

module.exports = config
