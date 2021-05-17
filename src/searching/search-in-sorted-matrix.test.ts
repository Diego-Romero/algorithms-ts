/**
 * Given a two dimensional matrix of distinct integers and a target integer. Each row in the matrix is sorted, and each column is also sorted; the matrix doesnt necessarily have the same height and width.
 * 
 * Write a function that returns an array of the row and column indices of the target integer, if it's contained in the matrix, otherwise [-1, -1]

 */

type Range = [number, number];

export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  let rowStart = 0, rowEnd = matrix.length;
  let midRow = Math.floor((rowStart + rowEnd) / 2);
  let colStart = 0, colEnd = matrix[midRow].length;
  let midCol = Math.floor((colStart + colEnd) / 2);
  let current = matrix[midRow][midCol];
  console.log(midRow, midCol)
  while (current !== target) {
    // todo, figure out how to traverse the matrix
  }

  return [midRow, midCol];
}

describe('search in sorted matrix', () => {
  test('should return the number in the matrix', () => {
    const matrix = [
      [1, 4, 7, 12, 15, 1000],
      [2, 5, 19, 31, 32, 1001],
      [3, 8, 24, 33, 35, 1002],
      [40, 41, 42, 44, 45, 1003],
      [99, 100, 103, 106, 128, 1004],
    ];
    const result = [3, 3] 
    expect(searchInSortedMatrix(matrix, 44)).toEqual(result);
  })
   
})
