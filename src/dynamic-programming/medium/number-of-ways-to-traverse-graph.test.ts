/**
 * You are given two integers representing a rectangle that will always be bigger than 1x1. Write a function that returns the number of ways to reach the bottom right side of the graph. You will always start a the top left of the graph, and you can only move down or right.
 */

export function numberOfWaysToTraverseGraph(width: number, height: number) {
  console.log(`width: ${width}, height: ${height}`)
  const grid: number[][] = new Array(height).fill(new Array(width).fill(0))
  // fill all the tops and lefts to 1
  for (let i = 0; i < height; i++) grid[i][0] = 1;
  grid[0] = new Array(width).fill(1);
  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      const prevLeft = grid[row][col - 1], prevTop = grid[row - 1][col];
      grid[row][col] = prevLeft + prevTop;
      // console.log(`current row ${row}, col: ${col}, number: ${grid[row][col]}`)
    }
    console.log('current row: ', grid[row])
  }
  
  return grid[height - 1][width - 1];
}

describe('number of ways to traverse graph', () => {
  test('should return the right answer 1', () => {
     expect(numberOfWaysToTraverseGraph(2, 3)).toEqual(3)
  })
  
  test('should return the right answer 2', () => {
     expect(numberOfWaysToTraverseGraph(4, 3)).toEqual(10)
  })
})
