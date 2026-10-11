'use strict'

function clamp(value, min, max) {
  for (const x of [value, min, max]) {
    if (typeof x !== 'number' || !Number.isFinite(x)) {
      throw new TypeError('clamp: value, min and max must be finite numbers')
    }
  }
  if (min > max) {
    throw new RangeError('clamp: min must be less than or equal to max')
  }
  return Math.min(Math.max(value, min), max)
}

module.exports = { clamp }
