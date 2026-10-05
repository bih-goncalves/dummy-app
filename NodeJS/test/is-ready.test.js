const test = require('node:test');
const assert = require('node:assert');
const { isReady } = require('../src/isReady.js');

test('isReady devolve true para exatamente "READY"', () => {
  assert.strictEqual(isReady('READY'), true);
});

test('isReady devolve false para um valor diferente', () => {
  assert.strictEqual(isReady('ready'), false);
});
