// Given a sorted array, return the index of the target provided, if is not present return -1.
export function binarySearch(array: number[], target: number): number {
  return helper(array, target, 0, array.length - 1)
}

function helper(array: number[], target: number, left: number, right: number): number {
  if (left > right) return - 1;
    let mid = Math.floor((left + right) / 2) // 
    let current = array[mid]
    if (target === current) return mid;
    else if (target > current) return helper(array, target, mid + 1, right)
    else return helper(array, target, left, mid - 1)
}

describe('binary search', () => {
  test('should return the target index in Log N if is present', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 9)).toBe(8)
  })
   
  test('should return the target index in Log N if is present at the start', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 1)).toBe(0)
  })
  test('should return the target index in Log N if is present at the end', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 10)).toBe(9)
  })
  test('should return -1 if not present', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 11)).toBe(-1)
  })
})
