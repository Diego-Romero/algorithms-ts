/**
 * Given an array of numbers between 1 and N. Where N is the length of the array, write a function that returns the first integer that appears more than once, when the array is read from left to right.
 * If there is none return -1, you are allowed to mutate the input array
 */

export function firstDuplicateValue(array: number[]): number {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const absValue = Math.abs(element)
    if (array[absValue - 1] < 0) return absValue; // if the number is negative, means that we have flipped it before
    const inverted = array[absValue - 1] * -1;
    array[absValue - 1] = inverted;
  //  console.log(array, absValue, inverted) 
  }
  return -1;
}

describe('first duplicate value in array', () => {
  test('should return the first possible duplicate in O(N) time with no extra space', () => {
    expect(firstDuplicateValue([2,1,5,2,3,3,4])).toBe(2)
  })
  
})
