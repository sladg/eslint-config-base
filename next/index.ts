import { defineConfig } from "eslint-define-config"
import { defaultIgnorePatterns, defaultRules, defaultExtends, defaultParser, defaultPlugins } from "../core"

const config = defineConfig({
  parser: defaultParser,
  extends: [...defaultExtends],
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
})

export default config
