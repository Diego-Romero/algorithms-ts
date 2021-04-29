/**
 * Given a sorted array of unique positive integers representing coin denominations and a single non-negative integer N representing a target amount of money, write a function that returns the smallest number of coins needed to make change for that target amount, using the given coin denominations.
 */

// Solution in O(D log D + (D * N)) runtime, where D represents the different denominations. Space is equal to O(N)
export function minNumberOfCoinsForChange(n: number, denominations: number[]): number {
  const ways: number[] = new Array(n + 1).fill(-1);
  const sortedDenoms = denominations.sort((a, b) => a - b)
  ways[0] = 0;

  for (let denom of sortedDenoms) {
    for (let i = 1; i < ways.length; i++) {
      if (i % denom === 0) { // if the denomination is divisible with the  current number, we fill the array with the result
        ways[i] = i / denom
        console.log('is divisible, setting ways!', denom, i, ways)
      } else if (i >= denom) { // if the number has the chance to be used in conjunction another number in the ways, then attempt to set it
        if (ways[i - denom] !== -1) { // if we can find a number to complement this, then we can set it
          // how many denoms can I fit in i
          const denomsFittingCurrent = Math.floor(i / denom)
          ways[i] = Math.min(ways[i], denomsFittingCurrent + ways[i % denom], ways[i - denom] + 1)
        console.log('number is not divisible, but manage to set', denom, i, ways)
        }
      }
    }
  }
  return ways[n];
}

describe('min numbers of coins for change', () => {
  test('should give the right result 0', () => {
      expect(minNumberOfCoinsForChange(3, [1, 2])).toEqual(2)
  })
  test('should give the right result 1', () => {
      expect(minNumberOfCoinsForChange(7, [1, 5, 10])).toEqual(3)
  })
  test('should give the right result 2', () => {
      expect(minNumberOfCoinsForChange(12, [1, 5, 10])).toEqual(3)
  })
  test('should give the right result 3', () => {
      expect(minNumberOfCoinsForChange(20, [1, 5, 10])).toEqual(2)
  })
  test('should give the right result 4', () => {
      expect(minNumberOfCoinsForChange(24, [1, 5, 10])).toEqual(6)
  })
  test('should give the right result 5', () => {
      expect(minNumberOfCoinsForChange(10, [1, 3, 4])).toEqual(3)
  })
})
