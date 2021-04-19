/**
 * Write a function that takes and array and returns a boolean indicating wether the array is monotonic.
 * An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
 */

export function isMonotonic(array: number[]) {
  if (array.length < 2) return true;
  let isAscending = null;
  // console.log('is ascending', isAscending)
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i], next = array[i + 1]
    if (element === next) continue;
    if (isAscending === null && element < next) isAscending = true;
    if (isAscending === null && element > next) isAscending = false;
    // console.log(element, next)
    if (isAscending) {
      if (element > next) return false;
    } else {
      if (element < next) return false;
    }
  }
  return true;
}

describe('is monotonic array', () => {
  test('should return true if just one element or no elements', () => {
    const array = [1]
    expect(isMonotonic(array)).toBeTruthy()
    expect(isMonotonic([])).toBeTruthy()
  })
  test('should return true if all the elements are entirely non increasing', () => {
    const array = [-1, -5, -10, -1100, -1100, -1101, -1102]
    expect(isMonotonic(array)).toBeTruthy()
  })
  test('should return true if all the elements are entirely non decreasing', () => {
    const array = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11];
    expect(isMonotonic(array)).toBeTruthy()
  })
  
  test('should return false if some of the elements are entirely non increasing', () => {
    const array = [-1, -5, -4, -1100, -1100, -1101, -1102]
    expect(isMonotonic(array)).toBeFalsy()
  })
  test('should return false if some of the elements are entirely non decreasing', () => {
    const array = [1,2,2,2,2,4,8,7,8]
    expect(isMonotonic(array)).toBeFalsy()
  })
})
