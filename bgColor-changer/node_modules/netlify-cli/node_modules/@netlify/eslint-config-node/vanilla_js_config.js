const { overrides } = require('./.eslintrc.js')

module.exports = {
  extends: './.eslintrc.js',
  overrides: [
    ...overrides,
    {
      files: ['*.html'],
      env: {
        browser: true,
      },
      extends: ['eslint:recommended'],
    },
  ],
}
