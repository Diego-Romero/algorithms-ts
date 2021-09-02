function solveNQueens(n: number): string[][] {
  const state = new Array(n);
  const result: string[][] = [];
  search(0, state, n, result);
  return result;
}

function search(
  row: number,
  state: number[],
  size: number,
  result: string[][]
): void {
  if (row >= size) {
    // create result and push
    result.push(createStringResult(state));
  }

  for (let col = 0; col < size; col++) {
    // need to check if we are creating a valid one
    if (isValid(row, col, state)) {
      // update state
      state[row] = col;
      search(row + 1, state, size, result);
    }
  }
}

function isValid(row: number, col: number, state: number[]): boolean {
  // check all the previous rows and cols
  for (let prevRow = 0; prevRow < row; prevRow++) {
    // check if the current col we are trying to add already exists
    const prevCol = state[prevRow];
    const isSameCol = col === prevCol;
    const isDiagonal = Math.abs(prevCol - col) === Math.abs(prevRow - row);

    if (isSameCol || isDiagonal) return false;
  }

  return true;
}

function createStringResult(state: number[]): string[] {
  const result: string[] = [];
  for (let value of state) {
    let s = "";
    for (let i = 0; i < state.length; i++) {
      let char: string = "";
      if (i === value) char = "Q";
      else char = ".";
      s += char;
    }
    result.push(s);
  }

  return result;
}

describe("leet code Solve N Queens", () => {
  test("should work and return string", () => {
    console.log(solveNQueens(4));
  });
});
