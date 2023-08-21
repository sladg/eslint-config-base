import { defineConfig } from 'tsup'

export default defineConfig({
  entryPoints: [
    'next/index.ts',
    'node/index.ts',
    // Possibly more entries in future.
  ],
  clean: true,
  format: ['esm', 'cjs'],
  dts: false,
  sourcemap: false,
  splitting: false,
  minify: false,
  skipNodeModulesBundle: true,
  esbuildOptions: (options) => {
    options.footer = {
      // This will ensure we can continue writing this plugin
      // as a modern ECMA module, while still publishing this as a CommonJS
      // library with a default export, as that's how ESLint expects plugins to look.
      // @see https://github.com/evanw/esbuild/issues/1182#issuecomment-1011414271
      js: 'module.exports = module.exports.default;',
    }
  },
})
