const assert = require('yeoman-assert');
const path = require('path');
const test = require('yeoman-test');

const files = require('../generators/app/files');

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
      files.forEach((file) => {
        assert.file(file.destination);
      });

      done();
    });
  });
});
