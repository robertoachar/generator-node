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
      for (let i = 0; i < files.length; i += 1) {
        assert.file(files[i].destination);
      }

      done();
    });
  });
});
