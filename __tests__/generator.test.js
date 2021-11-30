import assert from 'yeoman-assert';
import path from 'path';
import test from 'yeoman-test';

import files from '../generators/app/files';

describe('TESTS', () => {
  describe('Generator Tests', () => {
    beforeAll((done) => {
      test
        .run(path.join(__dirname, '../generators/app/main.js'))
        .withPrompts({
          project: 'awesome-project',
          description: 'An awesome project',
          name: 'Roberto Achar',
          email: 'robertoachar@gmail.com',
          username: 'robertoachar',
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
