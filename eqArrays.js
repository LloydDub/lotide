const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
  // for (let i = 0; i < array1.length; i++) {
  //   for (let j = 0; j < array2.length; j++) { 
  //     if (array1[i] != array2[j]) {
  //       return false;
  //     } 
        
    
  //   }    
  // }
  // return true;
}

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", 2, 3])) // => false
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS)
