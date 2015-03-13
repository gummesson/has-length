/**
 * Dependencies
 */

var typeOf = require('type-of')

/**
 * Check if `obj` has a length.
 *
 * @param  {array|object|string} obj
 * @return {boolean}
 *
 * @api public
 */

function hasLength(obj) {
  if (typeOf(obj) === 'object')
    obj = Object.keys(obj)
  return !!obj.length
}

/**
 * Exports
 */

module.exports = hasLength
