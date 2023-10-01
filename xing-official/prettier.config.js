// "$schema": "https://json.schemastore.org/prettierrc",

module.exports = {
  arrowParens: 'always',
  jsxBracketSameLine: false,
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  jsxSingleQuote: false,
  printWidth: 140,
  singleAttributePerLine: true,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  // vueIndentScriptAndStyle: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [require('prettier-plugin-tailwindcss')]
};
