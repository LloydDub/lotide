function eqArrays(array1, array2) {

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true; 
}
let assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }  
}


assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 7])
