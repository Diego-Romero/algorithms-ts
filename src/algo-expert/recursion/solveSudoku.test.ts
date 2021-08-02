export function solveSudoku(board: number[][]) {
  let solved: number[][] = board;

  function recurse(board: number[][]) {
    console.table(board);
    for (let row = 0; row < board.length; row++) {
      const rowNums: number[] = board[row].filter((n) => n != 0);
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0) {
          const colNums: number[] = getColNums(col, board);
          const availableNums = getAvailableNums(rowNums, colNums);
          if (availableNums.length) {
            const previousValue = board[row][col];
            for (let num of availableNums) {
              board[row][col] = num;
              recurse(board);
            }
            board[row][col] = previousValue;
          } else {
            return;
          }
        }
      }
    }
  }

  recurse(board);

  return solved;
}
function getColNums(col: number, board: number[][]) {
  const nums: number[] = [];
  for (let row = 0; row < board.length; row++) {
    const num = board[row][col];
    if (num !== 0) nums.push(num);
  }
  return nums;
}

function getAvailableNums(rowNums: number[], colNums: number[]) {
  const set = new Set(rowNums);
  colNums.forEach((n) => set.add(n));
  const available: number[] = [];
  for (let i = 1; i < 10; i++) {
    if (!set.has(i)) available.push(i);
  }

  return available;
}

/**
the input is an always solvable Sudoku puzzle
0 represents an empty square
1-9 a valid number

*/

/**
the input is an always solvable Sudoku puzzle
0 represents an empty square
1-9 a valid number

*/

describe("solve sudoku", () => {
  test("should work", () => {
    const example = [
      [7, 8, 0, 4, 0, 0, 1, 2, 0],
      [6, 0, 0, 0, 7, 5, 0, 0, 9],
      [0, 0, 0, 6, 0, 1, 0, 7, 8],
      [0, 0, 7, 0, 4, 0, 2, 6, 0],
      [0, 0, 1, 0, 5, 0, 9, 3, 0],
      [9, 0, 4, 0, 6, 0, 0, 0, 5],
      [0, 7, 0, 3, 0, 0, 0, 1, 2],
      [1, 2, 0, 0, 0, 7, 4, 0, 0],
      [0, 4, 9, 2, 0, 6, 0, 0, 7],
    ];
    expect(solveSudoku(example)).toBeTruthy();
  });
});
