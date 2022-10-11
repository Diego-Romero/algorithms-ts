/**
This function will receive any number of arguments inside of it, whenever the function is called with no arguments 
it should call the callback function with as many arguments as we have received before.

This is similar to the question I have solved for 
*/
function curry(callback) {
  function recurse(...args) {
    if (args.length === 0) return callback(); // if the first time around we receive empty params
    return (...newArgs) => {
      // we should always return a new function, if by the time we invoke this function there are no new arguments, meaning there is empty params we want to call the callback with all the previous params we have collected
      if (newArgs.length === 0) return callback(...args);
      return recurse(...args, ...newArgs); // otherwise we return this recursive function with whatever new params we have been given.
    };
  }
  return recurse;
}

// Do not edit the line below.
exports.curry = curry;

describe("Currying", () => {
  test("should work when we provide input and then we call the function with no arguments", () => {
    const sum = (...numbers) =>
      numbers.reduce((total, value) => total + value, 0);
    const curriedFunc = curry(sum);
    expect(curriedFunc(2)(2)(2, 2)()).toEqual(8);
    expect(curriedFunc(2)()).toEqual(2);
    expect(curriedFunc(2)(2)()).toEqual(4);
    expect(curriedFunc()).toEqual(0);
  });
  test("should work when we call the function but we don't resolve it in the end", () => {
    const sum = (...numbers) =>
      numbers.reduce((total, value) => total + value, 0);
    const curriedFunc = curry(sum);
    const result = curriedFunc(2)(2)(2, 2);
    expect(typeof result).toEqual("function");
  });
});
