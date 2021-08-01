const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(eqObjects(ab, ba)); // => true

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


// loops over the objects
// after the loop it will compare key:value

// They have the same number of keys
//The value for each key in one object is the same as the value for that same key in the other object

// posistion doesn't matter
