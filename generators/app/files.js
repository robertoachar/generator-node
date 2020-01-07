const files = [
  { template: 'src/index.js.template', destination: 'src/index.js' },
  { template: 'babel.config.js.template', destination: 'babel.config.js' },
  { template: 'CHANGELOG.md.template', destination: 'CHANGELOG.md' },
  { template: 'editorconfig.template', destination: '.editorconfig' },
  { template: 'eslintignore.template', destination: '.eslintignore' },
  { template: 'eslintrc.json.template', destination: '.eslintrc.json' },
  { template: 'gitattributes.template', destination: '.gitattributes' },
  { template: 'gitignore.template', destination: '.gitignore' },
  {
    template: 'jest-eslint.config.js.template',
    destination: 'jest-eslint.config.js'
  },
  {
    template: 'jest-test.config.js.template',
    destination: 'jest-test.config.js'
  },
  { template: 'jest.config.js.template', destination: 'jest.config.js' },
  { template: 'LICENSE.template', destination: 'LICENSE' },
  { template: 'npmrc.template', destination: '.npmrc' },
  { template: 'main.js.template', destination: 'main.js' },
  { template: 'package.json.template', destination: 'package.json' },
  { template: 'README.md.template', destination: 'README.md' }
];

export default files;
