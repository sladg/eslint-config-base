import {
  defaultExtends,
  defaultIgnorePatterns,
  defaultParser,
  defaultPlugins,
  defaultRules,
  ESLintConfig,
} from '../core'

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

export default config
