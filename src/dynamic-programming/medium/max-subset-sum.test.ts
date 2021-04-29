/**
 * Write a function that takes an array and returns the maximum possible sum of all non-adjacent elements
 */

// need to build and auxiliary array that keeps the max value between i - 1 and i - 2 + the current.
export function maxSubsetSumNoAdjacent(array: number[]) {
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];
  const aux = [array[0], Math.max(array[0], array[1])];
  for (let i = 2; i < array.length; i++) {
    const current = array[i]
    aux[i] = Math.max(aux[i - 2] + current, aux[i - 1])
  }
  return aux[array.length - 1];
}

describe('max subset sum of non adjacent elements', () => {
  test('should return the max sum of all non adjacent elements', () => {
      expect(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])).toBe(330)
  })
  test('should return the max sum of all non adjacent elements 2', () => {
      expect(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14])).toBe(33)
  })
  test('should return the max sum of all non adjacent elements 3', () => {
      expect(maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3])).toBe(207);
  })
})
