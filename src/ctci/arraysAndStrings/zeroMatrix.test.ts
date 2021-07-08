function zeroMatrix(matrix: number[][]): number[][] {
  const rows = new Set<number>(),
    columns = new Set<number>();

  for (let row = 0; row < matrix.length; row++) {
    const rowLen = matrix[row].length;
    for (let col = 0; col < rowLen; col++) {
      const current = matrix[row][col];
      if (current === 0) {
        // store coordinates
        rows.add(row);
        columns.add(col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    const rowLen = matrix[row].length;
    if (rows.has(row)) {
      matrix[row] = new Array(rowLen).fill(0);
    } else {
      for (let col = 0; col < rowLen; col++) {
        if (columns.has(col)) matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}

describe("zero matrix", () => {
  const matrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
  ];

  test("should work", () => {
    const result = zeroMatrix(matrix);
    console.log(result);
  });
});
