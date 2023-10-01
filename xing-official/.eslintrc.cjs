/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
    '@vue/eslint-config-prettier',
  ],
  ignorePatterns: ['postcss.config.js', 'prettier.config.js', 'tailwind.config.js'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/singleline-html-element-content-newline': 'off', // 這條開啟會限制 html 標籤有內容就換行，如果很短實在沒必要特別換行
    'vue/require-default-prop': 'off', // 要求 props 要有預設值
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'warn',
    // 'max-len': [
    //   'error',
    //   {
    //     code: 160,
    //     ignorePattern: 'class="([\\s\\S]*?)"|d="([\\s\\S]*?)"', // ignore classes or svg draw attributes
    //     ignoreUrls: true,
    //   },
    // ],
  },
}
