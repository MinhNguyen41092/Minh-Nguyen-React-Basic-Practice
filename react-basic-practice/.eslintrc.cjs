module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/function-component-definition': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
  },
  'jsx-a11y/no-static-element-interactions': [
    'error',
    {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp',
      ],
      allowExpressionValues: true,
    },
  ],
};
