function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length,
    n = matrix[0].length;
  let startRow = 0,
    endRow = m - 1;
  let startCol = 0,
    endCol = n - 1;

  function search(): boolean {
    if (startRow > endRow || startCol > endCol) return false;

    let midRow = Math.floor((endRow + startRow) / 2);
    let midCol = Math.floor((endCol + startCol) / 2);
    const current = matrix[midRow][midCol];
    console.log(current);
    console.log(startRow, endRow);
    console.log(startCol, endCol);

    if (target < current) {
      endRow = midRow;
      endCol = midCol;
    } else if (target > current) {
      startRow = midRow;
      startCol = midCol;
    } else {
      return true;
    }
    return search();
  }

  return search();
}

describe("search matrix", () => {
  const matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    target = 8;
  test("should give the right result", () => {
    expect(searchMatrix(matrix, target)).toBeTruthy();
  });
});
