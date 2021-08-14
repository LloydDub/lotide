// EG OBJECTS
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // First I will check the length of first object by comparing these keys variables
  const keys2 = Object.keys(object2); // object2 assigned to a second key variable.

  if (keys1.length !== keys2.length) {
    return false;
    
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (areObjects && !eqObjects(val1, val2) || !areObjects && val1 !== val2) {
      return false;
    }
    
  }
 return true;

}
function isObject(object) {
  return object != null && typeof object === 'object';
}
//------------------------------

const assertObjectsEqual = function(actual, expected) {
   const inspect = require('util').inspect;
   if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}) === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}) !== ${inspect(expected)}`);
  }
}


module.exports = assertObjectsEqual;