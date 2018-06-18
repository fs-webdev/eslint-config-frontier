module.exports = {
  env: {
    node: true,
    mocha: true,
    browser: true
  },
  plugins: ['html'],
  extends: ['frontier'],
  rules: {
    'valid-jsdoc': 'off'
  },
  globals: {
    Polymer: true,
    ReduxMixin: true,
    url: true,
    semverLite: true
  }
};
