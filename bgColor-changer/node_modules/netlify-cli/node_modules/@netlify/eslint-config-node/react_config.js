const { overrides } = require('./.eslintrc.js')

const ECMA_VERSION = 6

module.exports = {
  extends: './.eslintrc.js',
  overrides: [
    ...overrides,
    {
      files: ['*.jsx'],
      parserOptions: {
        ecmaVersion: ECMA_VERSION,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      env: {
        browser: true,
      },
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      rules: {
        'unicorn/filename-case': 0,
        'node/no-unsupported-features/es-syntax': 0,
        'unicorn/import-index': 0,
      },
    },
  ],
}
