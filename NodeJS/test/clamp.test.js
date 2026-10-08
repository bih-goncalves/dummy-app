const test = require('node:test')
const assert = require('node:assert/strict')
const { clamp } = require('../src/clamp.js')

test('value within range is returned unchanged', () => {
  assert.strictEqual(clamp(5, 0, 10), 5)
})

test('value below minimum is clamped to minimum', () => {
  assert.strictEqual(clamp(-3, 0, 10), 0)
})

test('value above maximum is clamped to maximum', () => {
  assert.strictEqual(clamp(42, 0, 10), 10)
})

test('exact boundary values are returned unchanged', () => {
  assert.strictEqual(clamp(0, 0, 10), 0)
  assert.strictEqual(clamp(10, 0, 10), 10)
})

test('non-finite value, min or max throws TypeError', () => {
  for (const bad of ['5', null, undefined, NaN, Infinity]) {
    assert.throws(() => clamp(bad, 0, 10), TypeError)
    assert.throws(() => clamp(5, bad, 10), TypeError)
    assert.throws(() => clamp(5, 0, bad), TypeError)
  }
})

test('min greater than max throws RangeError', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError)
})
