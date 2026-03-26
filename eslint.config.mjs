import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";

export default defineConfig([
  {
    extends: ["js/all"],
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.node },
    linterOptions: {
      reportUnusedInlineConfigs: "warn",
    },
    plugins: { js },
    rules: {
      "no-console": "off",
      "no-magic-numbers": ["warn", { ignore: [0, 1] }],
      "no-ternary": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-warning-comments": "off",
      "one-var": ["warn", "never"],
    },
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  {
    extends: ["json/recommended"],
    files: ["**/*.json"],
    language: "json/json",
    plugins: { json },
    rules: {
      "json/sort-keys": "warn",
      "json/top-level-interop": "warn",
    },
  },
  {
    extends: ["markdown/recommended"],
    files: ["**/*.md"],
    language: "markdown/gfm",
    plugins: { markdown },
    rules: {
      "markdown/no-bare-urls": "warn",
      "markdown/no-duplicate-headings": "warn",
    },
  },
]);
