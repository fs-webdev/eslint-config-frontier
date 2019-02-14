module.exports = {
  plugins: ['react-hooks'],
  extends: ['plugin:react/recommended', 'prettier/react'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/prop-types': 'off'
  }
};
