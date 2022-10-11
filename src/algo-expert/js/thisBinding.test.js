// assume that thisContext will always be an object, and this object should be bound not a clone.
// assume that the function will be called with the traditional function syntax and not arrow functions.
Function.prototype.myCall = function (thisContext, ...args) {
  const symbol = Symbol();
  thisContext[symbol] = this;
  const result = thisContext[symbol](...args);
  delete thisContext[symbol];
  return result;
};

Function.prototype.myApply = function (thisContext, args = []) {
  return this.myCall(thisContext, ...args);
};

Function.prototype.myBind = function (thisContext, ...args) {
  return (...newArgs) => this.myApply(thisContext, [...args, ...newArgs]);
};

describe("this binding", () => {
  const obj = { num: 0 };
  function sumNumbers(x, y) {
    return this.num + x + y;
  }
  test("should work with my call", () => {
    const result = sumNumbers.myCall(obj, 1, 2);
    expect(result).toEqual(3);
  });
  test("should work with my apply", () => {
    const result = sumNumbers.myApply(obj, [1, 2]);
    expect(result).toEqual(3);
  });
  test("should work with my bind", () => {
    const result = sumNumbers.myBind(obj, 1, 2);
    expect(result()).toEqual(3);
  });
});
