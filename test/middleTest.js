const { assert } = require("chai");
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");

describe("#middle", () => {
  it("should return 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
})
