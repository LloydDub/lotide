const eqArrays = require("../eqArrays");
const { assert } = require("chai")

describe("eqArrays", () => {
  it("should return true for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for ([3, 2, 1], [1, 2, 3])", () => {
    assert.strictEqual(eqArrays([3, 2, 1], [1, 2, 3]), false);
  });
  it("should return false for ([1, 2, 3], ['1', '2', 3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], ['1', '2', 3]), false);    
  });


});

// console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])) // => true
// // console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// // console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", 2, 3])) // => false
