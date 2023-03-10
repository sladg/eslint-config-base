import { Linter } from "eslint"

export type ESLintConfig = Linter.Config

export const defaultIgnorePatterns: ESLintConfig["ignorePatterns"] = ["node_modules/**"]

export const defaultParser: ESLintConfig["parser"] = "@typescript-eslint/parser"

export const defaultExtends = ["prettier", "plugin:sonarjs/recommended"]

export const defaultPlugins = ["prettier", "@typescript-eslint", "unused-imports", "simple-import-sort", "import", "sonarjs"]

export const defaultRules: ESLintConfig["rules"] = {
  //
  // Disable rules provided by other configs
  //

  "no-unused-vars": 0, // Provided by TypeScript
  "no-undef": 0, // Provided by TypeScript
  "no-void": 0,

  //
  // Disable opinionated rules from @typescript-eslint
  //

  "@typescript-eslint/member-delimiter-style": 0, // Provided by Prettier
  "@typescript-eslint/interface-name-prefix": 0,
  "@typescript-eslint/no-explicit-any": 0,
  "@typescript-eslint/explicit-function-return-type": 0,
  "@typescript-eslint/no-use-before-define": 0,
  "@typescript-eslint/no-non-null-assertion": 0,
  "@typescript-eslint/no-unused-vars": 0, // Use TS compiler option instead

  // Disable importing banned packages. See: https://usertech.atlassian.net/wiki/spaces/DEV/pages/3003154445/Banned+packages
  // TEMPORARY DISABLED AS IT'S NOT WORKING CORRECTLY.
  // "no-restricted-imports": [
  //   "error",
  //   {
  //     paths: [
  //       {
  //         name: "react-final-form",
  //         message: "Use hook form instead of final form",
  //       },
  //       {
  //         name: "moment",
  //         message: "Use datejs instead of moment",
  //       },
  //       {
  //         name: "ramda",
  //         message: "Use lodash instead of ramda",
  //       },
  //       {
  //         name: "rxjs",
  //         message: "Stay away from RXJS!",
  //       },
  //       {
  //         name: "jquery",
  //         message: "Use vanilla JS instead of jQuery",
  //       },
  //       {
  //         name: "lerna",
  //         message: "Use turborepo workspaces instead of lerna",
  //       },
  //       {
  //         name: "yarn",
  //         message: "Use npm instead of yarn",
  //       },
  //     ],
  //     patterns: [
  //       {
  //         name: "@lingui/*",
  //         message: "Use next-intl instead of lingui",
  //       },
  //     ],
  //   },
  // ],

  // Sonar's configuration. Sniff codesmells and report them as errors.
  "sonarjs/cognitive-complexity": ["error", 15],
  "sonarjs/no-duplicate-string": "error",
  "sonarjs/no-identical-functions": "error",
  "sonarjs/no-small-switch": "error",
  "sonarjs/no-unused-collection": "error",
  "sonarjs/no-use-of-empty-return-value": "warn",
  "sonarjs/prefer-immediate-return": "error",
}
