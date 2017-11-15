module.exports = {
  plugins: ['security'],
  extends: ['plugin:security/recommended'],
  rules: {
    'detect-object-injection': 'off',
    'detect-non-literal-fs-filename': 'off'
  }
};
