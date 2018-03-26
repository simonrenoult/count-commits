# count-commits

> Count commits per file.

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Style Status][style-image]][style-url]
[![NPM Version][npm-image]][npm-url]

## Install

```sh
$ npm install --global count-commits
```

## Usage

### CLI

```sh
$ count-commits /path/to/file.js
14
```

### API

```js
const { countCommits } = require("count-commits");
const count = await countCommits("/path/to/file.js");
// Do something with <count>
```

## License

See LICENSE.txt

[travis-image]:https://img.shields.io/travis/simonrenoult/count-commits/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/simonrenoult/count-commits

[style-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[style-url]: https://prettier.io/

[coverage-image]: https://img.shields.io/codecov/c/github/simonrenoult/count-commits.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/simonrenoult/count-commits/branch/master

[npm-image]: https://img.shields.io/npm/v/count-commits.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/count-commits