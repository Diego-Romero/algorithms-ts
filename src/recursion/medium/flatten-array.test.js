/**
 * Replicate the flatten array function
 */
function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      const flat = flatten(element);
      result = [...result, ...flat];
    } else result.push(element);
  }
  return result;
}

describe("flatten array", () => {
  test("should flatten all the elements 1", () => {
    const array = [1, [2, 3], 4];
    expect(flatten(array)).toEqual([1, 2, 3, 4]);
  });
  test("should flatten all the elements 2", () => {
    const array = [1, [2, [3]], 4];
    expect(flatten(array)).toEqual([1, 2, 3, 4]);
  });
});
