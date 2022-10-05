/**
 * Problem: Given a 2d matrix containing 0s and 1s, return an array containing the length of all the rivers. The rivers are
 * the 1s in the matrix which are joined by other ones being above, below and left or right.
 *
 *  Approach:
 *  - We need to iterate over all the elements in the matrix looking for a river to start from O(N).
 *  - If we find a river, we need to BFS around the river, making sure that we find all the rivers around it whilst increasing the current count of the river.
 *  - Once we have finished in a certain river we need to return its length and put it in the result array. This can take up to O(N) too, as the whole matrix can be a river.
 *  - Once we have visited a river we should mark its element as 0, so we don't visit it again.
 *
 *
 * Clarifying questions:
 * - Can we have uneven 2d arrays?
 * - Do we need to check if we have a value different than 0 or 1?
 * - What do we do if the matrix is empty?
 * - Do we need to worry about under/overflow
 * - We can have all rivers, correct?
 */

// Solution in O(N) time | O(1) space?
export function riverSizes(matrix: number[][]): number[] {
  let currentCount = 0;
  // inner function to traverse the graph counting the river size
  function traverse(rowIdx: number, colIdx: number) {
    // check that we are inside the valid parameters of the matrix, and that this is not a river
    if (
      rowIdx < 0 ||
      rowIdx >= matrix.length ||
      colIdx < 0 ||
      colIdx >= matrix[rowIdx].length ||
      matrix[rowIdx][colIdx] === 0
    )
      return;
    else {
      currentCount++;
      matrix[rowIdx][colIdx] = 0; // we need to make sure that we don't visit this river again.
      traverse(rowIdx - 1, colIdx); // check above
      traverse(rowIdx + 1, colIdx); // check below
      traverse(rowIdx, colIdx - 1); // check left
      traverse(rowIdx, colIdx + 1); // check right
    }
  }

  const result: number[] = [];
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      if (matrix[rowIdx][colIdx] === 1) {
        traverse(rowIdx, colIdx); // [0, 0]
        result.push(currentCount);
        currentCount = 0;
      }
    }
  }

  return result;
}

describe("River sizes", () => {
  test("should work with a normal 2d array, containing rivers in all directions", () => {
    const matrix = [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
    ];
    const result = [2, 1, 5, 2, 2];
    expect(riverSizes(matrix)).toEqual(result);
  });
  test("should work if there are no rivers", () => {
    const matrix = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    expect(riverSizes(matrix)).toEqual([]);
  });
  test("should work if its only a river", () => {
    const matrix = [[1, 1, 1, 1]];
    expect(riverSizes(matrix)).toEqual([4]);
  });
  test("should work if the matrix is empty", () => {
    const matrix = [[]];
    expect(riverSizes(matrix)).toEqual([]);
  });
});
