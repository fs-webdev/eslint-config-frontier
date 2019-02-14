module.exports = {
  plugins:['import', 'html'],
  extends: ['frontier/es6', 'frontier/react', 'plugin:jest/recommended'],
  rules: {
    "import/no-unresolved": 2,
    "import/named": 2,
    "import/default": 2,
    "import/no-absolute-path": 2,
    "import/no-self-import": 2,
    "import/no-cycle": 2,
    "import/no-useless-path-segments": 2,
  }
}
