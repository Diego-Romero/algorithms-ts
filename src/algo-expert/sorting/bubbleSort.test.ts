export function bubbleSort(array: number[]) {
  // bubble sort, we keep iterating through the array shifting the lowest element to the left
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }
  console.log(array);

  return array;
}

describe("bubble sort", () => {
  test("should work", () => {
    expect(bubbleSort([8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
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
