module.exports = {
  extends: ['panadero'],
  rules: {'no-console': 'off'},
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  overrides: [
    {
      files: ['.*.js', '__*.js'],
      rules: {indent: ['error', 2]},
    },
  ],
};
