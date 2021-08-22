function without(source, itemsToRemove) {  
  return source.filter(function(ele){ // filters the source element
    return !itemsToRemove.includes(ele);       // check if element is in element
  })
}

console.log(without(["1", "1", "1", "2", "3", "1" , "1"], ["1", 2, "3"])); // should returrn 2


module.exports = without;

module.exports = without;
