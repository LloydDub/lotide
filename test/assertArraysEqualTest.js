const assertArraysEqual = require("../assertArraysEqual");
const { assert } = require("chai")


describe("#assertArraysEqual", () => {
  it("should pass for ([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3]));
  });
  it("should fail for ([1, 2, 4], [1, 2, 3])", () => {
    assert.strictEqual(assertArraysEqual(![1, 2, 4]));
  });


});


