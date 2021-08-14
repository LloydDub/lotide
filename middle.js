
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
};
  
module.exports = middle;