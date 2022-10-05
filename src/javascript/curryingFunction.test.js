function currying(func) {
  function currying(...args) {
    if (args.length >= func.length) return func(...args);
    return function (...next) {
      return currying(...args, ...next);
    };
  }
  return currying;
}

describe("currying function", () => {
  const multiply3Numbers = (a, b, c) => a * b * c;
  test("it should work with separate parameters", () => {
    const func = currying(multiply3Numbers);
    const result = func(2)(3)(2);
    expect(result).toEqual(12);
  });

  test("it should work with separate parameters", () => {
    const func = currying(multiply3Numbers);
    const result = func(2, 3)(2);
    expect(result).toEqual(12);
  });

  test("it should work with separate parameters 2", () => {
    const func = currying(multiply3Numbers);
    const result = func(2, 3, 2);
    expect(result).toEqual(12);
  });
});
