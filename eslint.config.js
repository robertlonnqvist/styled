import globals from "globals";
import eslintPlugin from "@eslint/js";
import typescriptPlugin from "typescript-eslint";
import prettierPlugin from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import jestPlugin from "eslint-plugin-jest";

export default typescriptPlugin.config(
  {
    ignores: ["dist/**"],
  },
  eslintPlugin.configs.recommended,
  typescriptPlugin.configs.recommended,
  prettierPlugin,
  reactPlugin.configs.flat.recommended,
  jestPlugin.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
);
