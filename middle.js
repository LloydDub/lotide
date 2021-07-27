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

let middle = function(array) {
  let finalArray = []; // empty array to return elemenets into
  if (array.length <= 2) {
    return finalArray;
  }
  if (array.length % 2 === 0) { // checks if array is even or odd.
    let index1 = array.length / 2 - 1;
    let index2 = array.length / 2;    
    finalArray.push(array[index1]);
    finalArray.push(array[index2]);
        
  } else {  // odd conditions below
    let index = array.length / 2;    
    let x = Math.ceil(index) - 1;     
    finalArray.push(array[x]);
    }
   return finalArray;      
  }

  console.log(middle([2]))
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
  
