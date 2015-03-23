/**
 * Dependencies
 */

var test      = require('tape')
var hasLength = require('../')

/**
 * Tests
 */

test('hasLength(obj)', function(assert) {
  assert.equal(hasLength([1]), true)
  assert.equal(hasLength({ one: 1 }), true)
  assert.equal(hasLength('string'), true)
  assert.equal(hasLength([]), false)
  assert.equal(hasLength({}), false)
  assert.equal(hasLength(''), false)
  assert.end()
})
