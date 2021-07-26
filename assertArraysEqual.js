function eqArrays(array1, array2) {

  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]){
      console.log(`🛑🛑🛑 Assertion Failed: ${array1[i]} !== ${array2[i]}`);
    }else {
      console.log(`✅✅✅ Assertion Passed: ${array1[i]} === ${array2[i]}`);
    }
  }
  
  

}

eqArrays([1, 4, 6, 7 ],[1, 4, 6, 7 ])
