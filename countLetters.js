const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters =  function(word){
	// Create the object which will store the count
	const count = {};
  
	// Loop over the letters of the word
	for (let i = 0; i < word.length; i++) {

		 const character = word[i];
		 if (character !== " ") {
			if (!count[character]) {
				count[character] = 1;	
			} else {
		    count[character]++;		
		  }
		}

	}

	return count;
};

const frequency = countLetters("lloyd Worth");

console.log(frequency["y"])

assertEqual(frequency["y"], 1)


