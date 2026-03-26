import { defineConfig } from "html-validate";
import NiceCheckersPlugin from "@fulldecent/nice-checkers-plugin";

export default defineConfig({
  plugins: [NiceCheckersPlugin],
  extends: [
    "html-validate:recommended",
    "html-validate:prettier",
    "html-validate:document",
    "nice-checkers-plugin:recommended",
  ],
  rules: {
    "allowed-links": [
      1,
      {
        allowAbsolute: false,
      },
    ],
    "attr-pattern": 1,
    "class-pattern": 1,
    "deprecated-class": 1,
    "id-pattern": 1,
    "name-pattern": 1,
    "nice-checkers/internal-links": [
      1,
      {
        webRoot: ".",
      },
    ],
    "no-style-tag": 1,
    "no-unknown-elements": 1,
    "require-csp-nonce": 1,
    "require-sri": [1, { target: "crossorigin" }],
    "svg-focusable": 1,
  },
});
