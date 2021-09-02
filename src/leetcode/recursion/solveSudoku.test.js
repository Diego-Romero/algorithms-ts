// need to attempt to partially fill the current number with numbers
function solveSudoku(board) {
  // iterate through the board, attempting to put numbers
  solvePartialSudoku(0, 0, board);
  return board;
}

// recursive function to attempt to put all the numbers in the board
function solvePartialSudoku(row, col, board) {
  let currentRow = row;
  let currentCol = col;
  // move to the next row if needed
  if (currentCol === board[currentRow].length) {
    currentRow++;
    currentCol = 0;
    if (currentRow === board.length) return true; // filled the whole board
  }

  if (board[currentRow][currentCol] === 0) {
    // try to put a digit in the board
    return tryDigitsAtPosition(currentRow, currentCol, board);
  }
  // move to the next one
  return solvePartialSudoku(currentRow, currentCol + 1, board);
}

// we need to return a boolean to see if is worth that we keep going
// if we have reversed to a 0 position return false
function tryDigitsAtPosition(row, col, board) {
  for (let digit = 1; digit < 10; digit++) {
    // check if the option would be valid
    if (isValidAtPosition(row, col, board, digit)) {
      board[row][col] = digit;
      if (solvePartialSudoku(row, col + 1, board)) return true;
    }
  }
  board[row][col] = 0; // if we tried with all these numbers, we need to backtrack to a previous one and set this one to zero
  return false;
}

// fine
function isValidAtPosition(row, col, board, number) {
  // check if is valid in the row
  const rowIsValid = !board[row].includes(number);
  const colIsValid = !board.map((row) => row[col]).includes(number);
  if (!rowIsValid || !colIsValid) return false;

  // check if is in the subgrid
  let subGridRowStart = Math.floor(row / 3) * 3;
  let subGridColStart = Math.floor(col / 3) * 3;

  // once we know the start of the subGrid, we can move 3 times in the rows and cols
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currentRow = subGridRowStart + i;
      const currentCol = subGridColStart + j;
      const currentNumber = board[currentRow][currentCol];
      if (number === currentNumber) return false;
    }
  }

  return true;
}

// Do not edit the line below.
exports.solveSudoku = solveSudoku;

const board = [
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

console.log(solveSudoku(board));
