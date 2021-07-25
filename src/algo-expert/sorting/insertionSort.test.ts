export function insertionSort(array: number[]) {
  // solution in O(N ^ 2)
  for (let i = 1; i < array.length; i++) {
    // need to keep moving every number to the left until its at its right position
    let j = i;
    while (j >= 1) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
      j--;
    }
  }
  return array;
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}

describe("insertion sort", () => {
  test("should work", () => {
    expect(insertionSort([8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
    ]);
  });
});
