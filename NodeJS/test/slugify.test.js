'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const slugify = require('../src/slugify.js');

test('converte texto normal', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('substitui pontuação', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
});

test('colapsa separadores repetidos', () => {
  assert.equal(slugify('a  --  b__c'), 'a-b-c');
});

test('remove hífens no início e no fim', () => {
  assert.equal(slugify('  --Hello--  '), 'hello');
});

test('lança TypeError para entrada não string', () => {
  assert.throws(() => slugify(42), TypeError);
  assert.throws(() => slugify(null), TypeError);
  assert.throws(() => slugify(undefined), TypeError);
});
