const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

let findKey = (object, callback) => {
  for (let i in object) { // loops over the objest
    if (callback(object[i])) { // stops at truthy 
      return i; // return i which is the key
    };         
  } ;   
};



module.exports = findKey;