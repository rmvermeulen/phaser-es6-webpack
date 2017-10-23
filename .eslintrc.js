module.exports = {
  parser: 'babel-eslint',
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  rules: {
    'import/no-unresolved': [2]
  },
  globals: {
    phaser: true
  },
  settings: {
    'import/core-modules': ['phaser', 'pixi', 'p2']
  }
}
