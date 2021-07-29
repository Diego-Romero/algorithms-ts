type Range = [number, number];

export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    const current = matrix[row][col];
    if (target < current) col--;
    else if (target > current) row++;
    else return [row, col];
  }
  return [-1, -1];
}

/**
Reflection:
- need to be able consider other angles for solving the proble and not silo myself to just one angle
- Need to create multiple examples to see if my solution works, not just assume is going to work with the first one
*/
