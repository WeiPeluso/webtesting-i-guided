const { add, multiply } = require("./calculator.js");

// test away!
// should add two numbers

describe("fun with matchers", function () {
  it("should know equality", function () {
    expect({ a: "1" }).toStrictEqual({ a: "1" });
    expect({ a: "1" }).toEqual({ a: "1" });
    expect([1, 2]).toEqual([1, 2]);
  });

  it("should work with falsy and truthy checks", function () {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
  });
});

describe("add()", function () {
  it("should add two numbers", function () {
    expect(add(2, 2)).toBe(4);
    expect(add(0, 0)).toBe(0);
    expect(add(1, 1)).toBe(2);
    expect(add(-1, 1)).toBe(0);
    expect(add(-1, 0)).toBe(-1);
    expect(add(3, 1000)).toBe(1003);
  });

  it("return 0 when called with no values", function () {
    expect(add()).toBe(0);
  });

  it("add a collection of values", () => {
    const expected = 500;
    const actual = add(400, 50, 25, 25);
    expect(actual).toBe(expected);
    expect(add(1, 2, 3, -3)).toBe(3);
  });

  it.todo("values are numbers");
  it.todo("should add an array of values");
  it.todo("throw an error if sum will be larger tha max number");
});

describe.skip("multiply()", function () {
  it("should multiply two numbers", function () {
    // setup - Arrange
    const expected = 4;

    // execute code under test - Act
    const actual = multiply(2, 2);

    // assert results - Assert
    expect(actual).toBe(expected);
  });
});
