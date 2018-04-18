const assert = require('yeoman-assert');
const path = require('path');
const test = require('yeoman-test');

const files = require('../generators/app/files');
const validate = require('../generators/app/validate');

describe('TESTS', () => {
  describe('Generator Tests', () => {
    beforeAll((done) => {
      test
        .run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          project: 'awesome-project',
          description: 'An awesome project',
          name: 'Roberto Achar',
          email: 'robertoachar@gmail.com',
          username: 'robertoachar'
        })
        .on('end', done);
    });

    it('should create a project', (done) => {
      for (let i = 0; i < files.length; i += 1) {
        assert.file(files[i].destination);
      }

      done();
    });
  });

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
