/*
Understanding the first example:
the queens can't be in the same row or in the same column
they are put in these columns [1,3, 0, 2]
as we know that we have to put one queen on each row, they can never be in the same row
*/
function NQueens(n: number) {
  const state = new Array(n).fill(0);
  return NQueensSearch(0, state, n);
}

function NQueensSearch(row: number, columnPlacements: number[], boardSize: number): number {
  if (row === boardSize) return 1; // we have found another placement successfully.
  let result = 0;

  for (let col = 0; col < columnPlacements.length; col++) {
    // generate all possible states for this queen

    if (checkValid(columnPlacements, row, col)) {
      // check if this is a valid candidate
      columnPlacements[row] = col;
      const currentStateResult = NQueensSearch(row + 1, columnPlacements, boardSize);
      result += currentStateResult;
    }
  }

  return result;
}

// check that is valid
function checkValid(
  columnPlacements: number[],
  row: number, //
  col: number //
): boolean {
  // iterate through all the previous row, to check if is valid, we know that the rows ahead are still unknown
  // we need to check if we have the previous column, or diagonal
  for (let prevRow = 0; prevRow < row; prevRow++) {
    const columnToCheck = columnPlacements[prevRow]; // queens in the same row is invalid
    const onRow = columnToCheck === col; // check if same row
    // check if it works diagonally
    const onDiagonal =
      Math.abs(prevRow - row) === Math.abs(columnToCheck - col); // check if is on diagonal
    if (onDiagonal || onRow) return false;
  }

  return true;
}

describe("NQueens", () => {
  test("should work with4", () => {
    const n = 4;
    expect(NQueens(n)).toEqual(2);
  });
});
