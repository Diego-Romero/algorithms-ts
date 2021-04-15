/**
 * Find the 3 largest numbers in an array without sorting them, the output should be sorted
 * You will always have a length of 3 or more.
 */
export function findThreeLargestNumbers(array: number[]) {
  const result: number[] = []
  for (let n of array) {
    if (result.length < 1) result.push(n)
    else if (result.length === 1) result[0] > n ? result.unshift(n) : result.push(n)
    else if (result.length === 2) {
      if (n <= result[0]) result.unshift(n);
      else if (n >= result[1]) result.push(n)
      else {
        result.unshift(n);
        [result[0], result[1]] = [result[1], result[0]]
      }
    }
    else {
      const pivot = result[1], min = result[0], max = result[2]
      console.log(`n: ${n}, result: ${result}`)
      if (n > pivot) {
        // shift pivot to the left
        result[0] = pivot;
        if (n > max) {
          result[1] = max;
          result[2] = n;
        } else {
          result[0] = pivot;
          result[1] = n;
        } 
        continue;
      } else if (n < pivot && n > min || n === pivot) { // if n is smaller than the pivot but larger than min swap it, or if we have a duplicate of the pivot
        result[0] = n;
      } 
    }
    console.log('result:', result)
  }
  return result;
}


describe("find-three-largest-numbers", () => {
  test('should return the 3 largest', () => {
    expect(findThreeLargestNumbers([1,9,12,4,6,3,2,12])).toEqual([9,12,12])
  })
  test('should return the 3 largest even when the first 3 are the largest', () => {
    expect(findThreeLargestNumbers([12, 9, 12, 12, 1])).toEqual([12,12,12])
  })
  test('should return the 3 largest when the first 3 elements need to be introduced in sorted order', () => {
    expect(findThreeLargestNumbers([12,9, 10, 1, 2, 3])).toEqual([9, 10, 12])
  })
  test('should work with algo expert question 1', () => {
    expect(
      findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
    ).toEqual([18, 141, 541])
  })
  
});
