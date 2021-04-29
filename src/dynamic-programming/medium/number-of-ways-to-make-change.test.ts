/**
 * Given an array of positive integers, and an integer n. Write the total number of ways to make change using the denominations provided in the array.
 */

export function numberOfWaysToMakeChange(n: number, denominations: number[]): number {
  const ways: number[] = new Array(n + 1).fill(0)
  ways[0] = 1;
  for (let denom of denominations) {
    for (let amount = denom; amount < ways.length; amount++) {
      if (denom <= amount) {
        ways[amount] += ways[amount - denom]
      }
    }
  }
  return ways[ways.length - 1];
}

describe('numbers of ways to make change', () => {
 test('should return how many ways to make change', () => {
   expect(numberOfWaysToMakeChange(6, [1,5])).toEqual(2) // 6 x 1, 5 x 1
 })
  
 test('should return how many ways to make change 2', () => {
   expect(numberOfWaysToMakeChange(10, [1, 5, 10])).toEqual(4) // [1, 1, 1, 1, 1, 2, 2, 2, 1, 1]
 })
})
