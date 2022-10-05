/**
 * Given an array of integers both positive and negative, where each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of two indices forward in the array.
 * If a jump spills past the array's bounds it wraps over to the other side.
 * Write a function that returns a boolean representing wether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and following the jumps, every element in the array is visited exactly once before landing back on the starting index.
 */

/**
 * Keep count of all the visited nodes, if at any point after the start we have returned to the initial point then we return false.
 *
 * Solution in O(N) time | O(1) space.
 */
export function hasSingleCycle(array: number[]) {
  let count = 0;
  let index = 0;
  while (count < array.length) {
    // if at any point we get back to index 0 and we are not at the very start, we return false
    if (count > 0 && index === 0) return false;
    count++;
    index = calculateNextPosition(array, index);
  }
  return index === 0; // the index now should have returned to the original position in order to be a unique cycle.
}

function calculateNextPosition(array: number[], index: number) {
  const next = (index + array[index]) % array.length;
  return next >= 0 ? next : array.length - next;
}

describe("single cycle check", () => {
  test("should give me the correct answer", () => {
    const array = [2, 3, 1, -4, -4, 2];
    expect(hasSingleCycle(array)).toBeTruthy();
  });
  test("should give me the false when is wrong", () => {
    const array = [2, 1, 2, 1];
    expect(hasSingleCycle(array)).toBeFalsy();
  });
});
