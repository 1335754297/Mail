module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'semi': 0,
    'spaced-comment': 0,
    'vue/no-parsing-error': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-for': 'off'
  },
  'extends': [
    'plugin:vue/essential'
  ]
}
