module.exports = {
  parserOptions: {
    ecmaVersion: 8
  },
  env: {
    es6: true
  },
  extends: ['eslint:recommended', 'frontier/lib/bestPractice', 'frontier/lib/style', 'frontier/lib/custom']
};
