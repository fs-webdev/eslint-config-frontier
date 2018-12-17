module.exports = {
  plugins: ['babel'],
  extends: ['airbnb', 'prettier'],
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
    'arrow-parens': [1, 'as-needed']
  }
};
