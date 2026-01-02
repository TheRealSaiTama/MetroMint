module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'legacy'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': ['error', { ignore: ['gestureDirection', 'smooth', 'smoothTouch', 'touchMultiplier', 'mouseMultiplier'] }], 
    // Lenis options sometimes look like unknown props if passed to div, but we passed to class.
    // Actually the lint error usually comes from `class` vs `className` or similar.
    'react/prop-types': 'off', // We are not using prop-types, plain JS
  },
}
