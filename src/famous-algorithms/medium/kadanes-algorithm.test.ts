/**
 * Write a function that takes an integer of arrays (positive and negative) 
 * and returns the maximum sum that can be achieved by summing adjacent numbers. 
 */

export function kadanesAlgorithm(array: number[]) {
  let max = array[0], currentSum = array[0];

  for (let i = 1; i < array.length; i++) {
    const n = array[i];
    currentSum = currentSum + n;
    if (n > currentSum) {
      currentSum = n;
    } 
    max = Math.max(max, currentSum);
  }

  return max;
}

describe('Kadanes algorithm', () => {
  test('should return the right result 1', () => {
    const array = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
    expect(kadanesAlgorithm(array)).toEqual(19)
  })
  
})
