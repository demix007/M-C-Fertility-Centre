import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      // TanStack Router file-based route exports commonly use non-component exports (e.g. `export const Route`).
      // We disable this rule for this codebase to keep iteration fast.
      'react-refresh/only-export-components': 'off',

      // MVP implementation uses `as any` in a few places for TanStack Router params typing.
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])
