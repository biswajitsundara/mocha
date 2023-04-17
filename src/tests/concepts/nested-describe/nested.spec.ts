import { assert } from "chai";

const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

describe("Calculator", () => {

  describe("Addition", () => {
    it("should return the sum of two positive numbers", () => {
      const result = add(2, 3);
      assert.strictEqual(result, 5);
    });

    it("should return the sum of a positive and negative number", () => {
      const result = add(2, -3);
      assert.strictEqual(result, -1);
    });
  });

  describe("Subtraction", () => {
    it("should return the difference between two positive numbers", () => {
      const result = subtract(5, 3);
      assert.strictEqual(result, 2);
    });

    it("should return the difference between a positive and negative number", () => {
      const result = subtract(5, -3);
      assert.strictEqual(result, 8);
    });
  });
});
