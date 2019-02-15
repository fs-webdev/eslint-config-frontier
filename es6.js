module.exports = {
  plugins: ['babel'],
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        singleQuote: true
      }
    ],

    'no-console': 'off',
    'arrow-parens': [1, 'as-needed'],
    //airbnb has functions true, which is a little overbearing
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }]
  }
};
