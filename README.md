# Eslint config

Opinionated configuration for eslint & prettier.

## Usage

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
