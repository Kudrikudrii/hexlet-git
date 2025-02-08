const globals = require("globals");
const path = require("path");
const { fileURLToPath } = require("url");
const { FlatCompat } = require("@eslint/eslintrc");
const pluginJs = require("@eslint/js");

// Для поддержки CommonJS-переменных
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

module.exports = [
  { languageOptions: { globals: globals.node } },
  ...compat.extends("airbnb-base"),
];