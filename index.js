module.export = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-var-requires": "warn",
    "no-console": "warn",
    "comma-spacing": ["error"],
    "no-trailing-spaces": ["error"],
    "curly": ["error"],
    "eol-last": ["error"],
	"prefer-const": "warn",
	"no-empty-pattern": "warn",
    "eqeqeq": "error",
    "indent": [
      "warn",
      4,
      {
        "SwitchCase": 1,
      },
    ],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-before-blocks": [
      "error",
      { "functions": "always", "keywords": "never", "classes": "never" },
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true,
      },
    ],
  },
};
