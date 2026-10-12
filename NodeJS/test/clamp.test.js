'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { clamp } = require('../src/clamp.js');

test('devolve value quando está dentro do intervalo', () => {
  assert.strictEqual(clamp(5, 0, 10), 5);
});

test('devolve min quando value está abaixo do mínimo', () => {
  assert.strictEqual(clamp(-3, 0, 10), 0);
});

test('devolve max quando value está acima do máximo', () => {
  assert.strictEqual(clamp(42, 0, 10), 10);
});

test('limites exatos devolvem o próprio limite', () => {
  assert.strictEqual(clamp(0, 0, 10), 0);
  assert.strictEqual(clamp(10, 0, 10), 10);
});

test('min === max devolve esse valor', () => {
  assert.strictEqual(clamp(7, 3, 3), 3);
});

test('lança TypeError quando algum argumento não é número finito', () => {
  const invalidos = ['5', null, undefined, NaN, Infinity, -Infinity, {}];
  for (const bad of invalidos) {
    assert.throws(() => clamp(bad, 0, 10), TypeError);
    assert.throws(() => clamp(5, bad, 10), TypeError);
    assert.throws(() => clamp(5, 0, bad), TypeError);
  }
});

test('lança RangeError quando min > max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError);
});
