/**
 * Write a function that returns the nth fibonacci number
 * The 0th number would be 0, 1st would 1, 6th would be 5.
 */

// solution without memoization
// export function getNthFib(n: number): number {
//   if (n === 2) return 1;
//   if (n < 2) return 0;
//   return getNthFib(n - 1) + getNthFib(n - 2)
// }

// solution with memoization
interface Cache {
  [key: number]: number
}

export function getNthFib(n: number, memo: Cache = {0: 0, 1: 0, 2: 1}): number {
  if (n in memo) return memo[n]
  else {
    memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo)
    return memo[n]
  }
}


describe('nth fibonacci', () => {
  test('should return the right number for 0', () => {
    expect(getNthFib(0)).toBe(0)
  })
  test('should return the right number for 1', () => {
    expect(getNthFib(1)).toBe(0)
  })
  test('should return the right number for 6', () => {
    expect(getNthFib(6)).toBe(5)
  })
})
