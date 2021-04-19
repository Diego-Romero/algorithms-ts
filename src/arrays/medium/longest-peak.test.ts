/**
 * Write a function that takes an array of integers, and returns the length of the longest possible peak in the array.
 * A peak is defined strictly from numbers who climb up and then go down.
 */

// solution in O(N) time, constant space.
export function longestPeak(array: number[]): number {
  let currentCounter = 1,
    max = 0, isAscending = false, finishedAscending = false;

  for (let i = 0; i < array.length - 1; i++) {
    const current = array[i], next = array[i + 1];
    // console.log(`current: ${current}, next: ${next}, is ascending: ${isAscending}`)
    if (next > current) {
      // when I start ascending again, I reset
      if (finishedAscending) {
        finishedAscending = false;
        currentCounter = 1;
      }
      currentCounter++;
      isAscending = true;
    } else if (next < current) {
      if (isAscending) {
        finishedAscending = true;
      }
      isAscending = false;
      // we record the longest possible on the way down
      if (finishedAscending) {
        currentCounter++;
        max = Math.max(max, currentCounter)
      }
    } else { // reset
      finishedAscending = false;
      isAscending = false;
      currentCounter = 1;
    }
  }

  return max;
}

describe("longest peak in array", () => {
  test("should return the length of the longest peak simple example", () => {
    const array = [1, 3, 2];
    expect(longestPeak(array)).toEqual(3);
  });
  test("should return the length of the longest peak when the peak is in the end", () => {
    const array = [-5, 10, 5, 1, 3, 2, 1];
    expect(longestPeak(array)).toEqual(4);
  });
  test("should return the length of the longest peak", () => {
    const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
    expect(longestPeak(array)).toEqual(6);
  });
  test("should return the length of the longest peak even when there is none", () => {
    const array = [1, 0, -1];
    expect(longestPeak(array)).toEqual(0);
  });
  test("should return the length of the longest peak even when there is none, because is just ascending", () => {
    const array = [1,2,3,4,5];
    expect(longestPeak(array)).toEqual(0);
  });
  test("should return the length of the longest peak even when there is none, because it meets the same number", () => {
    const array = [1,2,3,3,2,1];
    expect(longestPeak(array)).toEqual(0);
  });
});
