const takeUntil = function(array, callback) { 
  newArray = [];             // Where to store the new array
 for (const i in array) {  // Looping over the array
  if (callback(array[i])) { //when the loop reaches the truthy statement
    break; // stop looping
  } else { // when it stops looping
    newArray.push(array[i]) // push the array elements before condition in the callback
  }
 
 }
 
   return newArray; // return the newly made array
  
 }
  


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// expected output
// [ 1, 2, 5, 7, 2 ]
//---
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]


// const addNumber = num => {
//   console.log(num + 2);
//   return num + 2
// }




// const runMyFunc = func => {  
//   func(8)  
// }

// runMyFunc(addNumber)

// runMyFunc[addNumber]
// console.log(addNumber)

// console.log(addNumber(5))


// runMyFunc(addNumber)
