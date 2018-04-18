const assert = require('yeoman-assert');

const validate = require('../generators/app/validate');

describe('TESTS', () => {
  describe('Validate Tests', () => {
    it('should return true with name', (done) => {
      const message = validate.validateName('Roberto Achar');

      assert.equal(message, true);

      done();
    });

    it('should return an error without name', (done) => {
      const message = validate.validateName('');

      assert.equal(message, 'Enter your name');

      done();
    });

    it('should return true with email', (done) => {
      const message = validate.validateEmail('robertoachar@gmail.com');

      assert.equal(message, true);

      done();
    });

    it('should return an error without email', (done) => {
      const message = validate.validateEmail('');

      assert.equal(message, 'Enter your email');

      done();
    });

    it('should return true with username', (done) => {
      const message = validate.validateUsername('robertoachar');

      assert.equal(message, true);

      done();
    });

    it('should return an error without username', (done) => {
      const message = validate.validateUsername('');

      assert.equal(message, 'Enter your username');

      done();
    });
  });
});
