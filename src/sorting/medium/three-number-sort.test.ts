/**
 * Given an array of integers and another array of three distinct integers, sort the first array in place, in the order of integers in the second array.
 */

export function threeNumberSort(array: number[], order: number[]) {
  const first = order[0],
    last = order[2];
  let current = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === first) {
      swap(i, current);
      current++;
    }
  }

  current = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === last) {
      swap(i, current);
      current--;
    }
  }

  function swap(i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

describe("three number sort", () => {
  test("should sort the numbers in the correct order", () => {
    const array = [1, 0, 0, -1, -1, 0, 1, 1];
    const sort = [0, 1, -1];
    const result = [0, 0, 0, 1, 1, 1, -1, -1];
    expect(threeNumberSort(array, sort)).toEqual(result);
  });
});
