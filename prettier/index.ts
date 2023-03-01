import { Config as PrettierConfig } from "prettier"

const config: PrettierConfig = {
  trailingComma: "all",
  semi: false,
  singleQuote: true,
  quoteProps: "consistent",
  bracketSpacing: true,
  arrowParens: "always",
  tabWidth: 2,
  parser: "typescript",
}

module.exports = config
