const { __dirname } = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  plugins: ["jsdoc", "@typescript-eslint/eslint-plugin", "eslint-plugin", "eslint-plugin-prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended",
    "eslint-config-prettier",
    "prettier",
  ],
  settings: {
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx', 'js', 'jsx'],
    // },
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", "ts", "tsx", "d.ts"],
      },
      typescript: {
        alwyasTryTypes: true,
      },
    },
  },
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
    // 'react/react-in-jsx-scope': 'off',
    // 'react/prop-types':'off',
    // 'react/display-name': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
    quotes: ["error", "double"], //더블 쿼터 사용
    "@typescript-eslint/quotes": ["error", "double"], //더블 쿼터 사용
    "@typescript-eslint/no-unused-vars": "warn", //사용안한 변수는 경고
    "comma-dangle": "off", // 마지막에 , 을 넣어주지 않는다.
    "arrow-body-style": "off", //화살표 함수 안에 return을 사용 할 수 있다.
    "spaced-comment": "off", //주석을 뒤에 달 수 있다.
    "global-require": "off", //함수 내에서 require 사용가능
    "require-jsdoc": 0,
    "no-unused-vars": ["warn", { varsIgnorePattern: "HTMLElementTagNameMap" }],
  },
};
