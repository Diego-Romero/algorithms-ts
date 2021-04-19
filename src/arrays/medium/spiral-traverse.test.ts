/**
 * Write a function that takes a matrix and returns a one dimensional array, with all the elements in spiral order
 */

export function spiralTraverse(matrix: number[][]): number[] {
  const result: number[] = []
  let rowLength = matrix[0].length, colLength = matrix.length;
  console.log(`row length: ${rowLength}, col length: ${colLength}`)
  let rowStartIdx = 0, rowEndIdx = rowLength - 1;
  let colStartIdx = 0, colEndIdx = colLength - 1;

  while (rowLength > 1 && colLength > 1) {
    // L -> R
    for (let i = colStartIdx; i < colEndIdx; i++) 
      result.push(matrix[rowStartIdx][i])
    // T -> B
    for (let i = rowStartIdx; i < rowEndIdx; i++) 
      result.push(matrix[i][colEndIdx])
    // R -> L
    for (let i = colEndIdx; i > colStartIdx; i--) 
      result.push(matrix[rowEndIdx][i])
    // B -> T
    for (let i = rowEndIdx; i > rowStartIdx; i--) 
      result.push(matrix[i][colStartIdx])
    
    colStartIdx++; colEndIdx--; rowStartIdx++; rowEndIdx--;
    rowLength -= 2; colLength -=2;
  }
  if (colLength === 1) {
    for (let i = colStartIdx; i < colEndIdx; i++) 
    result.push(matrix[rowStartIdx][i])
  }
  if (rowLength === 1) {
    for (let i = rowStartIdx; i < rowEndIdx; i++) 
      result.push(matrix[i][colEndIdx])
  }

  console.log(result)
  return result;
}


describe('spiral traverse', () => {

  test('should return the numbers in the correct order in a square matrix', () => {
  const matrix: number[][] = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]
    const result = [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
    expect(spiralTraverse(matrix)).toEqual(result)
  })
  test('should return the numbers in the correct order in a rectangle matrix', () => {
  const matrix: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11, 12],
    [13, 14, 15]
  ]
    const result = [1,2,3,6,9,12,15,14,13,10,7,4,5,8,11]
    expect(spiralTraverse(matrix)).toEqual(result)
  })
})
