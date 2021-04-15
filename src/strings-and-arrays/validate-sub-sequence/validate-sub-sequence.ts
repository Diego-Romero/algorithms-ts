/**
 * write a function that returns if the numbers in the second array are present in the first one in the same order, they don't need to be adjacent to each other, just present in the same order 
 */
export function isValidSubsequence(array: number[], sequence: number[]) {
  let counter = 0;
  for (const n of array) {
    const current = sequence[counter];
    if (current === n) counter++;
    if (counter >= sequence.length) return true;
  }
  return false;
}

/**
 * Solution is in N + M, as we do need to iterate through both arrays
 */