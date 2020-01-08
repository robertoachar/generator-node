import Generator from 'yeoman-generator';

import files from './files';
import { validateEmail, validateName, validateUsername } from './validate';

class NodeGenerator extends Generator {
  initializing() {
    this.log('Node Project Generator');
    this.log('Made with  ❤️  by Roberto Achar');
    this.log();
  }

  prompting() {
    const done = this.async();

    const prompts = [
      {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?',
        default: 'awesome-project'
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
        default: 'An awesome project'
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: validateName,
        store: true
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: validateEmail,
        store: true
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: validateUsername,
        store: true
      }
    ];

    this.prompt(prompts).then(props => {
      this.props = props;
      done();
    });
  }

  writing() {
    this.log();
    this.log('🚀  Generating project...');
    this.log();

    const { project, description, name, email, username } = this.props;

    const templates = {
      project,
      description,
      name,
      email,
      username,
      year: new Date().getFullYear()
    };

    files.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file.template),
        this.destinationPath(file.destination),
        templates
      );
    });
  }

  install() {
    this.log();
    this.log('📦  Installing dependencies...');
    this.log();

    this.yarnInstall(['esm']);

    this.yarnInstall(
      [
        '@babel/core',
        '@babel/preset-env',
        '@types/jest',
        'babel-eslint',
        'babel-jest',
        'eslint',
        'eslint-config-airbnb-base',
        'eslint-config-prettier',
        'eslint-plugin-import',
        'eslint-plugin-prettier',
        'jest',
        'jest-runner-eslint',
        'jest-watch-typeahead',
        'prettier'
      ],
      { dev: true }
    );
  }

  end() {
    this.fs.delete('.yo-rc.json');

    this.log();
    this.log('🎉  Successfully generated!');
  }
}

export default NodeGenerator;
