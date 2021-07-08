// solution in O(n ^ 2)

function rotateMatrix(matrix: number[][]): number[][] {
  // go through the outer layer to the inner layer
  let length = matrix.length;
  for (let layer = 0; layer < length / 2; layer++) {
    let first = layer; // 0, 1
    let last = length - 1 - layer; // 3, 2

    for (let i = first; i < last; i++) {
      const top = matrix[first][i]; // 1
      const offset = i - first;
      // left bottom to top
      matrix[first][i] = matrix[last - offset][first];
      // bottom right to left
      matrix[last - offset][first] = matrix[last][last - offset];
      // right top to bottom
      matrix[last][last - offset] = matrix[i][last];
      // top left to right
      matrix[i][last] = top;
    }
  }

  return matrix;
}

describe("rotate matrix", () => {
  const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  test("should rotate", () => {
    const result = rotateMatrix(matrix);
    result.forEach((r) => console.log(r));
    console.log(result);
  });
});
