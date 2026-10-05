const test = require('node:test');
const assert = require('node:assert');
const { isHealthy } = require('../src/status.js');

test('isHealthy returns true for "UP"', () => {
  assert.strictEqual(isHealthy('UP'), true);
});

test('isHealthy returns false for "DOWN"', () => {
  assert.strictEqual(isHealthy('DOWN'), false);
});

test('isHealthy returns false for lowercase "up"', () => {
  assert.strictEqual(isHealthy('up'), false);
});

test('isHealthy returns false for undefined', () => {
  assert.strictEqual(isHealthy(undefined), false);
});
