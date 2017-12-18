module.exports = [
  { template: 'src/index.js.template', destination: 'src/index.js' },
  { template: 'CHANGELOG.md.template', destination: 'CHANGELOG.md' },
  { template: 'editorconfig.template', destination: '.editorconfig' },
  { template: 'eslintignore.template', destination: '.eslintignore' },
  { template: 'eslintrc.json.template', destination: '.eslintrc.json' },
  { template: 'gitattributes.template', destination: '.gitattributes' },
  { template: 'gitignore.template', destination: '.gitignore' },
  { template: 'LICENSE.template', destination: 'LICENSE' },
  { template: 'npmrc.template', destination: '.npmrc' },
  { template: 'package.json.template', destination: 'package.json' },
  { template: 'prettierrc.template', destination: '.prettierrc' },
  { template: 'README.md.template', destination: 'README.md' }
];
