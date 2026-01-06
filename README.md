# Eslint config

Opinionated configuration for eslint & prettier.

- [Usage](#usage)
  - [Next.js](#nextjs)
  - [Node.js](#nodejs)
  - [React Native / Expo](#react-native--expo)
  - [Prettier](#prettier)
  - [Optional: package.json Formatting](#optional-packagejson-formatting)

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

### Optional: package.json Formatting

For formatting and sorting `package.json` files:

```js
// eslint.config.js
import nodeConfig from "@sladg/eslint-config-base/node"
import packageJsonConfig from "@sladg/eslint-config-base/optional/package-json"

export default defineConfig([nodeConfig, packageJsonConfig])
```
