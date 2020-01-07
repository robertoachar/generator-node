module.exports = {
  displayName: 'test',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/__tests__/**/*.js'],
  collectCoverageFrom: ['**/generators/**/**.js', '!**/generators/**/main.js'],
  verbose: true
};
