module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    // Specify the file extension when importing only if not .ts
    'import/extensions': ['error', 'always', { ts: 'never' }],

    // Prefer named export
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    // Allow underscore dangle
    'no-underscore-dangle': 'off',

    // Rewrite this airbnb rule to allow for and for or loops
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
  },
};
