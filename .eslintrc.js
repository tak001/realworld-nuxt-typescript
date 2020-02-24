module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    camelcase: 'off',
    'nuxt/no-cjs-in-config': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prettier/prettier': 'error',
    'no-irregular-whitespace': 0,
  },
};
