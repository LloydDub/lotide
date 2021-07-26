let assertArraysEqual = function (array1, array2) {
  let result = eqArrays(array1, array2)
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);    
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }  
}
function eqArrays(array1, array2) {

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true; 
}

function flatten(feedInArray) {
  let ret = [];
  for(let i =0; i < feedInArray.length; i++) {
    if(Array.isArray(feedInArray[i])) {
      ret = ret.concat(flatten(feedInArray[i]));
    }else {
      ret.push(feedInArray[i]);
    }
  }
  return ret
}

console.log(flatten([1, 2, [3, 4], 5, [6]]))