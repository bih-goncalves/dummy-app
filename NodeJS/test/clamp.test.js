'use strict'

const { describe, test } = require('node:test')
const assert = require('node:assert/strict')
const { clamp } = require('../src/clamp.js')

describe('clamp', () => {
  test('returns value when inside range', () => {
    assert.equal(clamp(5, 0, 10), 5)
  })

  test('returns min when below range', () => {
    assert.equal(clamp(-3, 0, 10), 0)
  })

  test('returns max when above range', () => {
    assert.equal(clamp(42, 0, 10), 10)
  })

  test('handles exact limits', () => {
    assert.equal(clamp(0, 0, 10), 0)
    assert.equal(clamp(10, 0, 10), 10)
    assert.equal(clamp(7, 7, 7), 7)
  })

  test('throws TypeError for non-finite or non-number arguments', () => {
    for (const bad of [NaN, Infinity, '5', undefined]) {
      assert.throws(() => clamp(bad, 0, 10), TypeError)
      assert.throws(() => clamp(5, bad, 10), TypeError)
      assert.throws(() => clamp(5, 0, bad), TypeError)
    }
  })

  test('throws RangeError when min > max', () => {
    assert.throws(() => clamp(5, 10, 0), RangeError)
  })
})
