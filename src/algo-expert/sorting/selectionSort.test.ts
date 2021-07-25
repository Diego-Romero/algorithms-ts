export function selectionSort(array: number[]) {
  // solution in O(N ^ 2)
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) swap(array, i, j);
    }
  }

  console.log(array);

  return array;
}

function swap(array: number[], i: number, j: number): void {
  [array[i], array[j]] = [array[j], array[i]];
}

describe("selection sort", () => {
  test("should work", () => {
    expect(selectionSort([8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
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
