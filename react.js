module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off'
  }
};
