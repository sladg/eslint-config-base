# Eslint config

Opinionated configuration for eslint & prettier.

- [Usage](#usage)
  - [Next.js](#nextjs)
  - [Node.js](#nodejs)
  - [React Native / Expo](#react-native--expo)
  - [Prettier](#prettier)
  - [Optional: JSON Formatting (package.json, tsconfig.json)](#optional-json-formatting-packagejson-tsconfigjson)

## Usage

Install via npm:

```sh
npm install @sladg/eslint-config-base@latest --save-dev
```

### Next.js

Version 15/16.

```js
// eslint.config.js
import nextConfig from "@sladg/eslint-config-base/next"

export default defineConfig([
  nextConfig,
  {
    rules: {
      "no-console": "warn",
    },
  },
])
```

### Node.js

Version 22 and up.

```js
// eslint.config.js
import nodeConfig from "@sladg/eslint-config-base/node"

export default defineConfig([
  nodeConfig,
  {
    rules: {
      "no-console": "off",
    },
  },
])
```

### React Native / Expo

```js
// eslint.config.js
import nativeConfig from "@sladg/eslint-config-base/native"

export default defineConfig([nativeConfig])
```

### Prettier

Prettier is integrated into ESLint's configuration via `eslint-plugin-prettier`. You can customize Prettier options through the `prettier/prettier` rule:

```js
// eslint.config.js
import nodeConfig from "@sladg/eslint-config-base/node"

export default defineConfig([
  nodeConfig,
  {
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          printWidth: 100,
        },
      ],
    },
  },
])
```

### Optional: JSON Formatting (package.json, tsconfig.json)

For formatting and sorting `package.json` and `tsconfig.json` files:

```js
// eslint.config.js
import nodeConfig from "@sladg/eslint-config-base/node"
import jsonConfig from "@sladg/eslint-config-base/optional/json"

export default defineConfig([nodeConfig, jsonConfig])
```
