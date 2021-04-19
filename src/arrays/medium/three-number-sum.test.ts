/**
 * Write a function that takes a non empty array of distinct integers and an integer which represents the target sum.
 * Find all the triplets in the array that sum up to the target sum, and returns an array with all these triplets. The numbers in each triplets should be ordered in ascending order
 */

type Triplet = [number, number, number];
// solution, in n ^ 2 time, O(N) space
export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  const result: Triplet[] = [];
  const sorted = array.sort((a, b) => a - b);
  // console.log(sorted)

  for (let i = 0; i < sorted.length - 2; i++) {
    const current = sorted[i]; 
    // console.log(`current: ${current}, index: ${i}`)
    let left = i + 1,
      right = sorted.length - 1;
    while (left < right) {
      const currentSum = current + sorted[left] + sorted[right];
      // console.log(current, sorted[left], sorted[right], currentSum)
      if (currentSum === targetSum) {
        result.push([current, sorted[left], sorted[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) left++;
      else right--;
    }
  }
  // console.log(result)

  return result;
}

describe("three number sum", () => {
  test("should return all the triplets that match to the target sum", () => {
    const numbers = [0, 1, 9, 5, 6, 4, 2, 7];
    const result: Triplet[] = [
      [0, 1, 9],
      [0, 4, 6],
      [1, 2, 7],
      [1, 4, 5],
    ];
    expect(threeNumberSum(numbers, 10)).toEqual(result);
  });
  test("should return all the triplets that match to the target sum 2", () => {
    const numbers = [-10, -5, -3, 1, 2, 5, 6, 7, 12];
    const result: Triplet[] = [
      [-3, 1, 12],
      [-3, 6, 7],
      [1, 2, 7]
    ];
    expect(threeNumberSum(numbers, 10)).toEqual(result);
  });
});
