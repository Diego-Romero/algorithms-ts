export function solveSudoku(board: number[][]) {
  let result: number[][] = board;

  function recurse(r: number, c: number, sudoku: number[][]) {
    for (let row = r; row < 9; row++) {
      for (let col = c; col < 9; col++) {
        if (sudoku[row][col] === 0) {
          // get available numbers to try
          const rowNums = sudoku[row].filter((n) => n !== 0);
          const colNums = sudoku.map((row) => row[col]).filter((n) => n !== 0);
          // need to also get square numbers
          const set = new Set([...rowNums, ...colNums]);
          let possibleNums: number[] = [];
          console.table(sudoku);
          for (let i = 1; i <= 9; i++) if (!set.has(i)) possibleNums.push(i);
          console.log(possibleNums, row, col);
          if (possibleNums.length === 0) {
            // sudoku[row][col] = 0;
            return;
          }
          // console.log(set, rowNums, colNums, possibleNums)
          for (let possible of possibleNums) {
            sudoku[row][col] = possible;
            if (row === 8 && col === 8) {
              console.log("found it!");
              console.log(sudoku);
              result = sudoku;
            }
            recurse(row, col, sudoku);
          }
        }
      }
    }
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
