/**
 * Write a function that takes a non empty array of overlapping intervals, merges any overlapping intervals and returns the new intervals in no particular order. for example [1, 5] and [6,7] are not overlapping, but [1,6] and [6,7] are.
 */

export function mergeOverlappingIntervals(array: number[][]) {
  if (array.length === 1) return array;
  const sorted = array.sort((x, y) => x[0] - y[0])
  const result: number[][] = []
  // console.log(sorted)
  let current = array[0]
  for (let i = 1; i < array.length; i++) {
    const next = array[i]
    if (current[1] >= next[0]) {
      // they are overlapping
      current[0] = Math.min(current[0], next[0])
      current[1] = Math.max(current[1], next[1])
    } else {
      result.push(current)
      current = next;
    }
  }
  result.push(current)
  // console.log('result', result)
  return result;
}

describe('merge overlapping intervals', () => {
  test('should merge some simple overlapping intervals', () => {
    /**
       * sorted: 
       * [
          [ 1, 3 ],   [ 3, 5 ],
          [ 8, 12 ],  [ 9, 11 ],
          [ 15, 20 ], [ 18, 22 ],
          [ 30, 31 ], [ 30, 31 ]
        ]
       */
    const result = [
      [1, 5],
      [8, 12],
      [15, 22],
      [30, 31],
    ];
    expect(
      mergeOverlappingIntervals([
        [30, 31],
        [3, 5],
        [18, 22],
        [15, 20],
        [9, 11],
        [1, 3],
        [30, 31],
        [8, 12],
      ])
    ).toEqual(result);
  })
  
})
