// // need to attempt to partially fill the current number with numbers
// function solveSudoku(board) {
//   // iterate through the board, attempting to put numbers
//   solvePartialSudoku(0, 0, board);
//   return board;
// }

// // recursive function to attempt to put all the numbers in the board
// function solvePartialSudoku(row, col, board) {
//   let currentRow = row;
//   let currentCol = col;
//   // move to the next row if needed
//   if (currentCol === board[currentRow].length) {
//     currentRow++;
//     currentCol = 0;
//     if (currentRow === board.length) return true; // filled the whole board
//   }

//   if (board[currentRow][currentCol] === 0) {
//     // try to put a digit in the board
//     return tryDigitsAtPosition(currentRow, currentCol, board);
//   }
//   // move to the next one
//   return solvePartialSudoku(currentRow, currentCol + 1, board);
// }

// // we need to return a boolean to see if is worth that we keep going
// // if we have reversed to a 0 position return false
// function tryDigitsAtPosition(row, col, board) {
//   for (let digit = 1; digit < 10; digit++) {
//     // check if the option would be valid
//     if (isValidAtPosition(row, col, board, digit)) {
//       board[row][col] = digit;
//       if (solvePartialSudoku(row, col + 1, board)) return true;
//     }
//   }
//   board[row][col] = 0; // if we tried with all these numbers, we need to backtrack to a previous one and set this one to zero
//   return false;
// }

// // fine
// function isValidAtPosition(row, col, board, number) {
//   // check if is valid in the row
//   const rowIsValid = !board[row].includes(number);
//   const colIsValid = !board.map((row) => row[col]).includes(number);
//   if (!rowIsValid || !colIsValid) return false;

//   // check if is in the subgrid
//   let subGridRowStart = Math.floor(row / 3) * 3;
//   let subGridColStart = Math.floor(col / 3) * 3;

//   // once we know the start of the subGrid, we can move 3 times in the rows and cols
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       const currentRow = subGridRowStart + i;
//       const currentCol = subGridColStart + j;
//       const currentNumber = board[currentRow][currentCol];
//       if (number === currentNumber) return false;
//     }
//   }

//   return true;
// }

function solveSudoku(board) {
  tryToSolveSudoku(0, 0, board);
  return board;
}

// we need to iterate through the board, attempting to put the right character where it belongs
function tryToSolveSudoku(row, col, board) {
  console.log("trying to solve sudoku at ", row, col);
  // if the col has finished, move to the next row, if we have finished rows, we have solved the sudoku
  let currentCol = col;
  let currentRow = row;
  if (currentCol === board[row].length) {
    currentCol = 0;
    currentRow += 1;
    if (currentRow === board.length) {
      // we have finished!
      return true; // meaning that we have actually reached the end
    }
  }

  if (board[currentRow][currentCol] === 0) {
    // try to place the right digit in its place
    return placeDigit(currentRow, currentCol, board);
  } else {
    return tryToSolveSudoku(currentRow, currentCol + 1, board); // keep going, as this number has been partially filled.
  }
}

function placeDigit(row, col, board) {
  // try to put all the possible numbers at this position
  for (let i = 1; i < 10; i++) {
    // first we need to check that if the number we are putting is valid
    if (isValid(i, row, col, board)) {
      // keep moving forward
      board[row][col] = i;
      console.log("placing digit", i, "at row/col", row, col);
      if (tryToSolveSudoku(row, col + 1, board)) return true; // try the next time around
    }
    // we have tried all of them, revert back and return false
  }
  board[row][col] = 0;
  return false;
}

// check if is valid row, col or diagonal
function isValid(value, row, col, board) {
  console.log("validating value", value);
  const invalidRow = board[row].includes(value);
  const invalidCol = board[row].map((r) => r[col]).includes(value);
  if (invalidRow || invalidCol) return false;
  // check if is in the subgrid, find the start of the row/col and iterate
  const rowStart = Math.floor(row / 3) * 3;
  const colStart = Math.floor(col / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const currentRow = rowStart + i;
      const currentCol = colStart + i;
      const currentVal = board[currentRow][currentCol];
      if (value === currentVal) return false;
    }
  }
  // if we passed all the rest, it is a valid number;
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
