/**
 * Write a function that takes a non empty array of integers that are sorted in ascending order and returns a new array of the same
 * length with the squares of the original integers also in ascending order
 */

export function sortedSquaredArray(array: number[]): number[] {
  let left = 0, right = array.length -1;
  const result: number[] = [];
  while (left <= right) {
    const leftSq = Math.abs(array[left]) * Math.abs(array[left]); 
    const rightSq = array[right] * array[right];
    if (leftSq > rightSq) {
      result.unshift(leftSq);
      left++;
    } else {
      result.unshift(rightSq)
      right--;
    }
  }
  return result;
}
