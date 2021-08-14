// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual  = require('./assertObjectsEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten  = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const assertEqual = require('./assertEqual');
const takeUntil = require('./takeUntil');
const without = require('./without');




module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  assertObjectsEqual,
  countLetters,
  countOnly,
  map,
  assertEqual,
  takeUntil,
  without,
};