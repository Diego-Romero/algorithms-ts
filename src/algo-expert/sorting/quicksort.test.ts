/**
 * in quicksort we grab a number as a pivot, for example the first, then we iterate through the rest of the rest.
 * as we iterate we will swap all the numbers smaller than the pivot to the left, and all the largest to the right
 * Once we have iterated through the left and the right, we will switch the pivot with the right pointer.
 * Quicksort has a sorting time of N log N in average and best case scenario, whilst having a N^2 worse case.
 * Memory wise is O(log N) if we always sort the smallest array first, by means of using tail recursion.
 */

export function quickSort(array: number[]) {
  function helper(startIndex: number, endIndex: number) {
		if (startIndex >= endIndex) return;
    let pivotIndex = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = endIndex;
    while (rightIndex >= leftIndex) {
      const current = array[pivotIndex];
      if (array[leftIndex] > current && array[rightIndex] < current)
        swap(array, leftIndex, rightIndex);
      if (array[leftIndex] <= current) leftIndex++;
      if (array[rightIndex] >= current) rightIndex--;
    }
    swap(array, pivotIndex, rightIndex);
    // need to recurse over the smaller array first
    const isLeftSmaller = rightIndex - 1 - leftIndex > endIndex - rightIndex + 1;
    if (isLeftSmaller) {
      helper(startIndex, pivotIndex - 1);
      helper(pivotIndex + 1, endIndex);
    } else {
      helper(startIndex, rightIndex - 1);
      helper(rightIndex + 1, endIndex);
    }
  }

  helper(0, array.length - 1);
  return array;
}

function swap(array: number[], i: number, j: number) {
  [array[i], array[j]] = [array[j], array[i]];
}

describe("quicksort", () => {
  test("should sort in N log N", () => {
    const array = [6, 5, 2, 3, 5, 8, 9];
    expect(quickSort(array)).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
