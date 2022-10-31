module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['**/*.d.ts'],
  rules: {
    // 'import/first': 'off',
    // 'import/no-duplicates': 'off',
    // '@typescript-eslint/ban-ts-comment': [
    //   'error',
    //   { 'ts-ignore': 'allow-with-description' },
    // ],
  },
};
