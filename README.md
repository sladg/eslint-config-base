# Eslint config

Opinionated configuration for eslint & prettier.

- [Eslint config](#eslint-config)
  - [Usage](#usage)
    - [Next](#next)
    - [Node](#node)
    - [Prettier](#prettier)

## Usage

Install via npm:

```sh
npm install @sladg/eslint-config-base@latest --save-dev
```

Use latest to ensure you are always up-to-date with current configuration.

In your config file.

### Next

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["@sladg/eslint-config-base/next"]
  rules: {
    "no-console": "off",
  },
}
```

### Node

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["@sladg/eslint-config-base/node"]
  rules: {
    "no-console": "off",
  },
}
```

### Prettier

Prettier is part of Eslint's configuration, see: https://github.com/prettier/eslint-plugin-prettier#options

You can configure it with `prettier/prettier` rule in your `.eslintrc.js`:

```js
module.exports = {
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],
  },
}
```