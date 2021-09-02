function quickSort(array: number[]) {
  // pick a pivot, all the numbers to the left
  function helper(start: number, end: number) {
    if (start >= end) return;

    const pivot = start;
    let left = start + 1,
      right = end;
    while (left < right) {
      // want to switch them if left is bigger than right
      if (array[left] > array[right]) swap(left, right);
      if (array[left] < array[pivot]) left++;
      if (array[right] > array[pivot]) right--;
    }
    // swap the pivot with right
    swap(pivot, right);
    // need to calculate the same for each side
    // in order to maintain the N log N approach
    const leftLength = right - 1 - start;
    const rightLength = end - right + 1;
    if (leftLength < rightLength) {
      helper(start, right - 1);
      helper(right + 1, end);
    } else {
      helper(right + 1, end);
      helper(start, right - 1);
    }
  }
  function swap(i: number, j: number) {
    [array[i], array[j]] = [array[j], array[i]];
  }
  helper(0, array.length - 1);
}

describe("quicksort", () => {
  test("should sort", () => {
    const array: number[] = [5, 2, 3, 1, 2, 8, 7, 6, 9];
    quickSort(array);
    console.log(array);
  });
});
