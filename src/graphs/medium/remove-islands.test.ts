export function removeIslands(matrix: number[][]): number[][] {
  // invert 1's around the corner to 2s, as well as their connecting ones
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        row === 0 ||
        row === matrix.length - 1 ||
        col === 0 ||
        col === matrix[row].length - 1
      ) {
        if (matrix[row][col] === 1) {
          flipOnes(row, col);
        }
      }
    }
  }

  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) matrix[row][col] = 0;
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 2) matrix[row][col] = 1;
    }
  }
  console.log(matrix);

  function flipOnes(row: number, col: number) {
    if (
      row >= 0 &&
      row < matrix.length &&
      col >= 0 &&
      col < matrix[row].length &&
      matrix[row][col] === 1
    ) {
      matrix[row][col] = 2;
      flipOnes(row + 1, col);
      flipOnes(row - 1, col);
      flipOnes(row, col + 1);
      flipOnes(row, col - 1);
    }
  }

  return matrix;
}

describe("remove islands", () => {
  test("should remove all the islands 1", () => {
    const matrix = [
      [1, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1],
      [0, 0, 1, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 1],
    ];
    const result = [
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 1, 0],
      [1, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 1],
    ];
    expect(removeIslands(matrix)).toEqual(result);
  });
});
