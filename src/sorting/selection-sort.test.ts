/**
 * Selection sorts by sorting the list from left to right with a loop inside of a loop
 * Each iteration we find the smallest number and put it at the correct position, from left to right
 */
export function selectionSort(array: number[]) {
  let currentSmallest = [] // first element is the number and next one is it's index
  for (let i = 0; i < array.length; i++) {
    currentSmallest = [array[i], i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < currentSmallest[0]) currentSmallest = [array[j], j]
    }
    swap(array, i, currentSmallest[1])
  }
  return array;
}

function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}

describe("selection sort", () => {
  test("should sort the elements in the array", () => {
    expect(selectionSort([5, 4, 3, 2, 1, 9, 8, 7, 6])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);
  });
  test("should sort the elements in the array 2", () => {
    expect(selectionSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
