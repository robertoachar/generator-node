# generator-node

[![Travis Status][travis-badge]][travis-url]
[![AppVeyor Status][appveyor-badge]][appveyor-url]
[![CircleCI Status][circleci-badge]][circleci-url]
[![Coveralls Status][coveralls-badge]][coveralls-url]
[![NPM Version][npm-badge]][npm-url]
[![License][license-badge]][license-url]

> Yeoman generator for Node projects.

This generator provides the following features:

- **src** folder as a starter point to build your project.
- **esm** as a simple, babel-less, bundle-less ECMAScript module loader.
- **ESLint** to provide a pluggable linting utility for JavaScript.
- **Prettier** as an opinionated code formatter.
- **Jest** as a JavaScript Testing Framework with a focus on simplicity.
- **jest-runner-eslint** as an ESLint runner for Jest.
- **ntl** support. Interactive cli to list and run package.json scripts.
- **EditorConfig** to help you define and maintain consistent coding styles between different editors.
- **README.md** and **CHANGELOG.md** with information about the project, installation, usage, development, author and license.
- **Badges** for License.

## Project files

```text
.
|--- src
|    |--- index.js
|--- .editorconfig
|--- .eslintignore
|--- .eslintrc.json
|--- .gitattributes
|--- .gitignore
|--- .npmrc
|--- babel.config.js
|--- CHANGELOG.md
|--- jest-eslint.config.js
|--- jest-test.config.js
|--- jest.config.js
|--- LICENSE
|--- main.js
|--- package.json
|--- README.md
```

## Installation

- Install Yeoman

```bash
$ npm i -g yo
```

or

```bash
$ yarn global add yo
```

- Install Generator

```bash
$ npm i -g @robertoachar/generator-node
```

or

```bash
$ yarn global add @robertoachar/generator-node
```

## Usage

- Create a project

```bash
# Create a directory for your project
$ mkdir awesome-project

# Change into directory
$ cd awesome-project

# Generate a project
$ yo @robertoachar/node
```

- Run project

| Action                              | Usage (npm)             | Usage (yarn)         |
| ----------------------------------- | ----------------------- | -------------------- |
| Start development mode              | `npm start`             | `yarn start`         |
| Run lint                            | `npm run lint`          | `yarn lint`          |
| Start lint in watch mode            | `npm run lint:watch`    | `yarn lint:watch`    |
| Run tests                           | `npm run jest`          | `yarn jest`          |
| Start tests in watch mode           | `npm run jest:watch`    | `yarn jest:watch`    |
| Run tests with code coverage        | `npm run jest:coverage` | `yarn jest:coverage` |
| Run lint + tests                    | `npm test`              | `yarn test`          |
| Start lint + tests in watch mode    | `npm test:watch`        | `yarn test:watch`    |
| Run lint + tests with code coverage | `npm test:coverage`     | `yarn test:coverage` |

## Development

### Prerequisites

- Install [Node.js](https://nodejs.org)
- Install [npm](https://www.npmjs.com/)
- Install [Yarn](https://yarnpkg.com/)
- Install Yeoman CLI

```bash
$ npm i -g add yo
```

or

```bash
$ yarn global add yo
```

### Clone the repo

```bash
$ git clone https://github.com/robertoachar/generator-node.git
```

### Run generator

```bash
# Change into directory
$ cd generator-node

# Link generator
$ yarn link # or npm link

# Run generator
$ yo @robertoachar/node
```

## Author

[Roberto Achar](https://twitter.com/robertoachar)

## License

[MIT](https://github.com/robertoachar/generator-node/blob/master/LICENSE)

[travis-badge]: https://travis-ci.org/robertoachar/generator-node.svg?branch=master
[travis-url]: https://travis-ci.org/robertoachar/generator-node
[appveyor-badge]: https://ci.appveyor.com/api/projects/status/github/robertoachar/generator-node?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/robertoachar/generator-node
[circleci-badge]: https://circleci.com/gh/robertoachar/generator-node/tree/master.svg?style=shield
[circleci-url]: https://circleci.com/gh/robertoachar/generator-node
[coveralls-badge]: https://coveralls.io/repos/github/robertoachar/generator-node/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/robertoachar/generator-node?branch=master
[npm-badge]: https://img.shields.io/npm/v/@robertoachar/generator-node.svg
[npm-url]: https://www.npmjs.com/package/@robertoachar/generator-node
[license-badge]: https://img.shields.io/github/license/robertoachar/generator-node.svg
[license-url]: https://opensource.org/licenses/MIT
