/**
 * Clamps `value` within the inclusive range [`min`, `max`].
 *
 * @throws {TypeError} if `value`, `min` or `max` is not a finite number.
 * @throws {RangeError} if `min` is greater than `max`.
 */
function clamp(value, min, max) {
  if (!Number.isFinite(value)) {
    throw new TypeError('value must be a finite number')
  }
  if (!Number.isFinite(min)) {
    throw new TypeError('min must be a finite number')
  }
  if (!Number.isFinite(max)) {
    throw new TypeError('max must be a finite number')
  }
  if (min > max) {
    throw new RangeError('min must not be greater than max')
  }
  if (value < min) {
    return min
  }
  if (value > max) {
    return max
  }
  return value
}

module.exports = { clamp }
