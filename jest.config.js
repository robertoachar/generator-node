const lint = require('./jest-eslint.config');
const test = require('./jest-test.config');

module.exports = {
  projects: [lint, test]
};
