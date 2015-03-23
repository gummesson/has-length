/**
 * Dependencies
 */

var isArray = Array.isArray

/**
 * Check if `obj` has a length.
 *
 * @param  {array|object|string} obj
 * @return {boolean}
 *
 * @api public
 */

function hasLength(obj) {
  if (typeof obj === 'object' && !isArray(obj))
    obj = Object.keys(obj)
  return !!obj.length
}

/**
 * Exports
 */

module.exports = hasLength
