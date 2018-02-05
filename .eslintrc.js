/**
 * Created by Malashta Sergey on 01.02.2018.
 * email: malashta@gmail.com
 * url: http://malashta.ru
 */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  "globals": {
    "bar": true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended"],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {

    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': ['error',2,{'SwitchCase': 1}],
    'quotes': [2,'single'],
    'semi': [2,'always'],
    'max-len': ['error',140],
    'comma-dangle': ['error','never'],
    'no-irregular-whitespace': ['error',{'skipComments': true,'skipStrings': true,'skipRegExps': true,'skipTemplates': true}],
    'eqeqeq': ['error','always'],
    'wrap-iife': ['error','any'],
    'yoda': ['error','never',{'exceptRange': true}],
    'comma-style': ['error','last'],
    'brace-style': ['error','1tbs',{'allowSingleLine': true}],
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "error",
    "no-var": "error",
    "no-extra-semi": "error",
    "no-func-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-obj-calls": "error",
    "no-regex-spaces": "error",
    "no-unreachable": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
    "curly": "error",
    "no-alert": "error",
    "no-caller": "error",
    "no-div-regex": "error",
    "no-eval": "error",
    "no-eq-null": "error",
    "no-extra-bind": "error",
    "no-extend-native": "error",
    "no-implied-eval": "error",
    "no-floating-decimal": "error",
    "no-lone-blocks": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-native-reassign": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-proto": "error",
    "no-void": "error",
    "no-unused-expressions": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-with": "error",
    "radix": "error",
    "vars-on-top": "error",
    "no-shadow": "error",
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "no-shadow-restricted-names": "error",
    "eol-last": "error",
    "new-cap": "error",
    "new-parens": "error",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": "error",
    "no-spaced-func": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "no-constant-condition": "off",
    "no-case-declarations": "off",
    "no-unused-vars": "off",
    "no-fallthrough": "off",
    "wrap-regex": "off",
    "linebreak-style": "off",
    "no-negated-in-lhs": "off",
    "valid-jsdoc": "off",
    "block-scoped-var": "off",
    "complexity": "off",
    "consistent-return": "off",
    "default-case": "off",
    "dot-notation": "off",
    "no-loop-func": "off",
    "no-process-env": "off",
    "no-redeclare": "off",
    //"key-spacing": ["error", { align: "value" }],
    "no-warning-comments": "off",
    "no-return-assign": "off",
    "strict": "off",
    "no-catch-shadow": "off",
    "no-delete-var": "off",
    "no-use-before-define": "off",
    "consistent-this": "off",
    "func-names": "off",
    "padded-blocks": "off"
  }
};
