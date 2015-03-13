# has-length

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Check if an array, an object or a string has a length.

## Installation

```
npm install has-length
```

## Usage

``` javascript
var hasLength = require('has-length')

hasLength('string')   // => true
hasLength([1])        // => true
hasLength({ one: 1 }) // => true

hasLength('') // => false
hasLength([]) // => false
hasLength({}) // => false
```

[npm-img]: https://img.shields.io/npm/v/has-length.svg?style=flat-square
[npm-url]: https://npmjs.org/package/has-length
[license-img]: http://img.shields.io/npm/l/has-length.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/has-length.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/has-length
