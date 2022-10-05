// Should not mutate the internal array
Array.prototype.myMap = function (callback) {
  const result = [];
  const array = this;
  for (let i = 0; i < array.length; i++) {
    const currentValue = callback(array[i], i, this);
    result.push(currentValue);
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];
  const array = this;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) result.push(array[i]);
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  const array = this;
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i], i, array);
  }
  return result;
};

describe("array methods", () => {
  const array = [1, 2, 3];
  describe("my map", () => {
    test("should work with my map", () => {
      const mapped = array.myMap((value, i, arr) => {
        return value + i + arr[1];
      });
      expect(mapped).toEqual([3, 5, 7]);
    });
    test("should work with my map 2", () => {
      const array = [1, 2, 3];
      const mapped = array.myMap((value) => {
        return value * value;
      });
      expect(mapped).toEqual([1, 4, 9]);
    });
  });

  describe("my filter", () => {
    test("should work", () => {
      const filtered = array.myFilter((value, i, arr) => {
        const sum = value + i + arr[1];
        return sum > 5;
      });
      expect(filtered).toEqual([3]);
    });
  });

  describe("my reducer", () => {
    test("should work", () => {
      const reducedValue = array.myReduce((accumulator, value, i, arr) => {
        return accumulator + value + i + arr[i];
      }, 3);
      expect(reducedValue).toEqual(18);
    });
  });
});
