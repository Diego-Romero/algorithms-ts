/**
 * Given an array of integers and a number, move all instances of that number to the end of the array and the rest of the numbers to the start, this has to be done in place.
 */
export function moveElementToEnd(array: number[], toMove: number) {
  let left = 0, right = array.length - 1;
  moveToNextAvailableRight()

  while (left < right) {
    if (array[left] === toMove) {
      swap(left, right)
      moveToNextAvailableRight()
    }
    left++;
  }

  // move right until first non occurrence
  function moveToNextAvailableRight() {
    while (right > 0 && array[right] === toMove) right--;
  }

  function swap(i: number, j: number): void {
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array;
}

describe('move element to the end of array', () => {
  test('should move all occurrences to the end', () => {
    expect(moveElementToEnd([2, 1, 2, 2, 3, 4, 2], 2)).toEqual([4, 1, 3, 2, 2, 2, 2])
  })
  test('should move all occurrences to the end 2', () => {
    expect(moveElementToEnd([2,2,2,1], 2)).toEqual([1,2,2,2])
  })
  
})
