// bubble sort works by checking linearly the current and next element in the array
// if the next is bigger than the current we swap them, we do this repetitively 
// until we haven't swapped any elements in the current iteration, with a time complexity of O(n ^ 2)
export function bubbleSort(array: number[]) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      const element = array[i], next = array[i + 1]
      if (element > next) {
        swapped = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
  }
  return array;
}

describe("bubble sort", () => {
  test("should sort the elements in the array", () => {
      expect(bubbleSort([5,4,3,2,1,9,8,7,6])).toEqual([1,2,3,4,5,6,7,8,9])
  });
  test("should sort the elements in the array 2", () => {
      expect(bubbleSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2,3,5,5,6,8,9]);
  });
});
