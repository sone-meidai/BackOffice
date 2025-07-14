import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(eslintPluginPrettierRecommended, {
  languageOptions: {
    parserOptions: {
      parser: "@typescript-eslint/parser",
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    "no-debugger": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }],
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
  },
});
