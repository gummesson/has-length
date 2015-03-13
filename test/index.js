/**
 * Dependencies
 */

var test      = require('tape')
var hasLength = require('../')

/**
 * Tests
 */

test('hasLength(obj)', function(assert) {
  assert.equal(hasLength([1]), true, 'returns true for arrays')
  assert.equal(hasLength({ one: 1 }), true, 'returns true for objects')
  assert.equal(hasLength('string'), true, 'returns true for strings')
  assert.equal(hasLength([]), false, 'returns false for empty arrays')
  assert.equal(hasLength({}), false, 'returns false for empty objects')
  assert.equal(hasLength(''), false, 'returns false for empty strings')
  assert.end()
})
