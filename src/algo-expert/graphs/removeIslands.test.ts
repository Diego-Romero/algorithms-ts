/**
Problem:
- Given a two dimensional array of potentially unequal height and width.
- there are only 0s and 1s. An island is defined as any number of 1s that are horizontally or vertically adjacent, not diagonally. and that don't touch the border of the image.

Clarifying questions:
- Do we need to check that we might not get some shady input that is not a 1 or a 0? Are we safe to assume that is the only input that we will receive for now?

Draw enough examples:

Approach:
- We need to iterate through all the numbers in the array, whenever we have found a one we need to check if this is a possible island
- In case we have a found a possible island, then we need to convert all the 1s in this island to 0s.
  - We could potentially copy the matrix, iterate through all the borders and if a number starts with a 1 - we could DFS or BFS around it and make it a -1.
  - Then we iterate through the matrix again and if we find a 1, that means that 1 is inside the valid borders and we need to toggle it to be a 0.
  - We iterate through the matrix one last time and we re-toggle the -1s to 1s.
- We need to return the same input matrix.
 */

// O(N) time | O(1) space, as we are re using the provided matrix
export function removeIslands(matrix: number[][]): number[][] {
  function dfs(row: number, col: number) {
    // check that they have valid borders and that we are transforming the correct elements only, else return.
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[row].length ||
      matrix[row][col] === 0 ||
      matrix[row][col] === -1
    )
      return;
    else {
      // we have a 1 at this position
      matrix[row][col] = -1;
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }
  }

  // iterate trough all the borders, if we find a 1 do DFS to all the 1s we find around and make them -1
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        row === 0 ||
        row === matrix.length - 1 ||
        col === 0 ||
        col === matrix[row].length - 1
      )
        dfs(row, col);
    }
  }
  // iterate trough all the elements that have a 1 and turn them to 0s, and all the -1s into 1s.
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) matrix[row][col] = 0;
      if (matrix[row][col] === -1) matrix[row][col] = 1;
    }
  }
  return matrix;
}

describe("remove islands", () => {
  test("should remove the inner islands", () => {
    const input = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1],
    ];
    const output = [
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1],
    ];
    expect(removeIslands(input)).toEqual(output);
    console.table(input);
  });
  test("should remove the inner islands even when the input is of uneven width or height", () => {
    const input = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 1],
      [1, 0, 1],
    ];
    const output = [
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1],
      [1, 0, 1],
    ];
    expect(removeIslands(input)).toEqual(output);
    console.table(input);
  });
});
