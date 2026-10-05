/**
 * Checks whether a value is present (not null and not undefined).
 * This is about presence, not truthiness: falsy-but-present values
 * like 0, '', false and NaN are considered present.
 *
 * @param {*} value
 * @returns {boolean}
 */
function isPresent(value) {
  return value !== null && value !== undefined
}

module.exports = { isPresent }
