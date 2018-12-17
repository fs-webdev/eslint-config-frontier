module.exports = {
  extends: ['prettier/react'],
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 'off'
  }
};
