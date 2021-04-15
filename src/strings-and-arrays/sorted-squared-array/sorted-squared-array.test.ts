import { sortedSquaredArray } from "./sorted-squared-array";


describe("sorted-squared-array", () => {
  it('should return the square of numbers', () => {
    expect(sortedSquaredArray([1,2,3,4,5,6,7,8,9])).toEqual([1,4,9,16,25, 36, 49, 64, 81])
  })
  it('should return the square of numbers when there are negatives as well', () => {
    expect(sortedSquaredArray([-9, -3, -2, 1, 2, 3])).toEqual([1, 4, 4, 9, 9, 81])
  })
  it('should return the square of numbers when there is only one number', () => {
    expect(sortedSquaredArray([5])).toEqual([25])
  })
});