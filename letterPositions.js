const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i); //if we found the elelment in the array we add it on  itself.
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
        
    
    
   

  


letterPositions('hello there');

module.exports = letterPositions;
