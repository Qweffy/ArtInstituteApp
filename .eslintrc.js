module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: ['@typescript-eslint', 'react', 'react-native', 'import', 'jest', 'testing-library'],
  extends: ['@react-native-community', 'airbnb', 'airbnb-typescript', 'prettier'],
  root: true,
  rules: {
    semi: ['error', 'never'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/default-param-last': ['warn'],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-curly-brace-presence': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
    'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  ignorePatterns: ['.eslintrc.js', '__mocks__/*', 'coverage/**'],
  env: {
    'jest/globals': true,
  },
}
