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
  extends: ["@sladg/eslint-config-base/next"],
}
```

### Node

In `.eslintrc.js`:

```js
module.exports = {
  extends: ["@sladg/eslint-config-base/next"],
}
```

### Prettier

In `package.json` add:

```json
{
  "prettier": "@sladg/eslint-config-base/prettier"
}
```

In `.prettierrc.js`:

```js
module.exports = {
  ...require("@sladg/eslint-config-base/prettier"),
  semi: false,
}
```
