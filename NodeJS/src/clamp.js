'use strict';

function clamp(value, min, max) {
  const args = { value, min, max };
  for (const [name, arg] of Object.entries(args)) {
    if (!Number.isFinite(arg)) {
      throw new TypeError(`${name} must be a finite number`);
    }
  }
  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }
  return Math.min(Math.max(value, min), max);
}

module.exports = { clamp };
