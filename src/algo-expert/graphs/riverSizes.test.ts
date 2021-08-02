export function riverSizes(matrix: number[][]): number[] {
  const result: number[] = [];
  let counter = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const current = matrix[row][col];
      counter = 0;
      findRiverLength(row, col, matrix);
      if (current === 1) result.push(counter);
      // console.log("updated matrix", matrix);
    }
  }
  function findRiverLength(row: number, col: number, matrix: number[][]): void {
    // need to check it is inside the boundaries first, and if the number in which we landed is a river
    if (
      row >= 0 &&
      row < matrix.length &&
      col >= 0 &&
      col < matrix[row].length &&
      matrix[row][col] === 1
    ) {
      matrix[row][col] = 0; // visited this river we can remove
      // console.log("found a 1, updating matrix", matrix);

      counter += 1; // increase the current counter;
      findRiverLength(row + 1, col, matrix);
      findRiverLength(row - 1, col, matrix);
      findRiverLength(row, col + 1, matrix);
      findRiverLength(row, col - 1, matrix);
    }
  }
  console.log(result);
  return result;
}
