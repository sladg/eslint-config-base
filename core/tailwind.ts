import { defineConfig } from 'eslint/config'
import tailwind from 'eslint-plugin-tailwindcss'

export const tailwindConfig = defineConfig([
  tailwind.configs['flat/recommended'],
])
