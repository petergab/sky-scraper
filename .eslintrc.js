module.exports = {
  extends: ["airbnb", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-use-before-define": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": ["off"],
    "max-len": ["warn", { code: 150, ignoreComments: true, ignoreTrailingComments: true }],
    "no-param-reassign": ["off"],
    "consistent-return": "warn",
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "ignore",
        named: "ignore",
        asyncArrow: "ignore",
      },
    ],
    "import/no-named-as-default": "off",
    "import/no-cycle": "off",
    "jsx-quotes": [2, "prefer-single"],
    quotes: [2, "single", { avoidEscape: true }],
  },
  globals: {
    fetch: false,
    document: true,
    window: true,
  },
};
