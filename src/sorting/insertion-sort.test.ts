/**
 * insertion works by creating tentative sorted lists, every element that we grab as we are iterating through our list will be inserted in its correct order (I find it easier to implement from back to front), making the necessary swaps as we go along, we can do the swaps in place giving us O(1) constant space, and a time complexity of O(N ^ 2) as we will have an inner loop
 */
export function insertionSort(array: number[]) {
  for (let index = 1; index < array.length; index++) {
    // we iterate backwards until the start, swapping if we need to
    let i = index;
    while (i > 0) {
      if (array[i] < array[i - 1]) swap(array, i, i - 1)
      i--;
    }
  }
  console.log(array)
  return array;
}

function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]]
}

describe("insertion sort", () => {
  test("should sort the elements in the array", () => {
    expect(insertionSort([5, 4, 3, 2, 1, 9, 8, 7, 6])).toEqual([
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
    expect(insertionSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
