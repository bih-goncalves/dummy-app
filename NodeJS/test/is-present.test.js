const { test } = require('node:test')
const assert = require('node:assert/strict')
const { isPresent } = require('../src/isPresent.js')

test('isPresent returns true for a present string', () => {
  assert.strictEqual(isPresent('abc'), true)
})

test('isPresent returns true for a present object', () => {
  assert.strictEqual(isPresent({}), true)
})

test('isPresent returns false for null', () => {
  assert.strictEqual(isPresent(null), false)
})

test('isPresent returns false for undefined', () => {
  assert.strictEqual(isPresent(undefined), false)
})

test('isPresent returns true for falsy-but-present values', () => {
  assert.strictEqual(isPresent(0), true)
  assert.strictEqual(isPresent(''), true)
  assert.strictEqual(isPresent(false), true)
  assert.strictEqual(isPresent(NaN), true)
})
