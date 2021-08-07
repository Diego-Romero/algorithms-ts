/**

	- first pass make all the ones that are touching a border, 2s
	- second pass: make all the ones a 0
	- third pass revert the 2s
  const input = [
    [2, 0, 0, 0, 0, 0],
    [0, 1, 0, 2, 2, 2],
    [0, 0, 1, 0, 2, 0],
    [2, 2, 0, 0, 2, 0],
    [2, 0, 1, 1, 0, 0],
    [2, 0, 0, 0, 0, 2],
  ];
 */
export function removeIslands(matrix: number[][]) {
  // iterate through the borders
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === 0 || row === matrix.length - 1) bfs(row, col);
      else if (col === 0 || col === matrix[row].length - 1) bfs(row, col);
    }
  }
  // make the 1s that are islands 0s
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) matrix[row][col] = 0;
    }
  }
  // revert
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 2) matrix[row][col] = 1;
    }
  }

  console.log(matrix);
  function bfs(row: number, col: number) {
    // if outside the boundaries
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length)
      return;
    if (matrix[row][col] === 0 || matrix[row][col] === 2) return;
    // else is a 1, we need to bfs and make it a two
    matrix[row][col] = 2;
    bfs(row + 1, col);
    bfs(row - 1, col);
    bfs(row, col + 1);
    bfs(row, col - 1);
  }

  return matrix;
}

describe("remove islands", () => {
  const input = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
  ];
  test("should remove the inner islands", () => {
    console.log(removeIslands(input));
  });
});
