/**
 * Given an array of numbers between 1 and N. Where N is the length of the array, write a function that returns the first integer that appears more than once, when the array is read from left to right.
 * If there is none return -1, you are allowed to mutate the input array
 */

export function firstDuplicateValue(array: number[]) {
  for (let number of array) {
    const absValue = Math.abs(number)
    if (array[absValue - 1] < 0) return absValue;
    array[number - 1] = number * - 1;
  }
  return array;
}

describe('first duplicate value in array', () => {
  test('should return the first possible duplicate in O(N) time with no extra space', () => {
    expect(firstDuplicateValue([2,1,5,2,3,3,4])).toBe(2)
  })
  
})
