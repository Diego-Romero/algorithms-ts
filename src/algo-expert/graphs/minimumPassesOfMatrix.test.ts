/**
 * Given a 2d matrix of numbers, see how many passed it would take to convert all the negative numbers into positives.
 * A negative number can be turned into a positive if it has a positive number top, bottom, left or right. If not all numbers can be converted into positives then return -1.
 * a 0 can not convert a negative into a positive, it just remains.
 *
 * Approach:
 * - we need to count how many negative values we have in the graph, this will help us detect if we have completed all of them at the end.
 * - We need to BFS through the graph, initially starting by grabbing the coordinates of all the positive values in the graph.
 * - From there we need to expand outwards, checking if we can add any negative values
 */
export function minimumPassesOfMatrix(matrix: number[][]) {
  let passes = 0;
  const queue: [number, number][] = [];
  function checkValid(row: number, col: number) {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[row].length ||
      matrix[row][col] >= 0
    )
      return false;
    matrix[row][col] = Math.abs(matrix[row][col]); // make it a positive
    return true;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) queue.push([row, col]);
    }
  }

  while (queue.length > 0) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift()!;
      if (checkValid(row + 1, col)) {
        queue.push([row + 1, col]);
      }
      // we need to check for all the valid angles for this coordinate
      // if any of them is a negative value, then we make it a positive and add it to the queue.
      if (checkValid(row + 1, col)) queue.push([row + 1, col]);
      if (checkValid(row - 1, col)) queue.push([row - 1, col]);
      if (checkValid(row, col + 1)) queue.push([row, col + 1]);
      if (checkValid(row, col - 1)) queue.push([row, col - 1]);
    }
    passes++;
  }

  // if we have any outstanding negative value, return -1;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] < 0) return -1;
    }
  }

  return passes - 1;
}

describe("minimum passes of matrix ", () => {
  test("should work with matrix 1", () => {
    const matrix = [
      [0, -1, -3, 2, 0],
      [1, -2, -5, -1, -3],
      [3, 0, 0, -4, -1],
    ];
    expect(minimumPassesOfMatrix(matrix)).toEqual(3);
  });
  test("should work with matrix 2", () => {
    const matrix = [
      [1, 0, 0, -2, -3],
      [-4, -5, -6, -2, -1],
      [0, 0, 0, 0, -1],
      [1, 2, 3, 0, -2],
    ];

    expect(minimumPassesOfMatrix(matrix)).toEqual(6);
  });
  test("it should return -1 when we could not convert all the numbers", () => {
    const matrix = [
      [1, 0, 0, -2, -3],
      [-4, -5, -6, -2, -1],
      [0, 0, 0, 0, 1],
      [1, 2, 3, 0, -2],
    ];

    expect(minimumPassesOfMatrix(matrix)).toEqual(-1);
  });
});

/**
- matrix of unequal height and width
- returns the minimum number of passes required to convert all negative integers in the matrix to positive

- get all the initial coordinates of the elements that are positive, put them in a queue
- 

*/
