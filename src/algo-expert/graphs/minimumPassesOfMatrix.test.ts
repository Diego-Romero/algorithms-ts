export function minimumPassesOfMatrix(matrix: number[][]) {
  const queue: [number, number][] = [];
  let turns = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) queue.push([row, col]);
    }
  }

  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const [row, col] = queue.shift()!;
      // check if we can make any of the adjacent nodes positive
      makePositive(row + 1, col);
      makePositive(row - 1, col);
      makePositive(row, col + 1);
      makePositive(row, col - 1);
    }
    turns++;
    console.table(matrix);
    console.log(queue);
    console.log(turns);
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] < 0) return -1;
    }
  }

  function makePositive(row: number, col: number) {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[row].length ||
      matrix[row][col] >= 0
    )
      return;
    // make it positive
    matrix[row][col] = matrix[row][col] * -1;
    queue.push([row, col]);

    // insert the coordinates into the queue
  }

  return turns - 1; // if we can't convert all negatives to positives
}

describe("minimum passes of matrix ", () => {
  // test("should work with matrix 1", () => {
  //   const matrix = [
  //     [0, -1, -3, 2, 0],
  //     [1, -2, -5, -1, -3],
  //     [3, 0, 0, -4, -1],
  //   ];

  //   console.log(minimumPassesOfMatrix(matrix));
  // });
  test("should work with matrix 2", () => {
    const matrix = [
      [1, 0, 0, -2, -3],
      [-4, -5, -6, -2, -1],
      [0, 0, 0, 0, -1],
      [1, 2, 3, 0, -2],
    ];

    console.log(minimumPassesOfMatrix(matrix));
  });
});

/**
- matrix of unequal height and width
- returns the minimum number of passes required to convert all negative integers in the matrix to positive

- get all the initial coordinates of the elements that are positive, put them in a queue
- 

*/
