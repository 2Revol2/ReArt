module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:i18next/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".tsx"] }],
    "import/prefer-default-export": "off",
    "linebreak-style": "off",
    quotes: ["error", "double"],
    "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "react/require-default-props": "off",
    "arrow-body-style": "off",
    "no-shadow": "off",
    "no-unused-vars": "warn",
    "no-underscore-dangle": "off",
    "react/jsx-props-no-spreading": "warn",
    "import/no-extraneous-dependencies": "off",
    "comma-dangle": "off",
    "implicit-arrow-linebreak": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "i18next/no-literal-string": ["warn", { markupOnly: true, ignoreAttribute: ["data-testid"] }],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.test.ts", "**/src/**/*.test.tsx"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
