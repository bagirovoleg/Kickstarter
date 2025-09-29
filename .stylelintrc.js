module.exports = {
  extends: '@mate-academy/stylelint-config',
  plugins: ['stylelint-scss'],
  // Ignore shared utils from other projects to avoid property-order conflicts
  ignoreFiles: ['src/styles/utils/**'],
  rules: {},
};
