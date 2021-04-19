import { twoNumberSum } from "./two-sum"


describe(`two sum`, () => {
  it('should return the 2 numbers that sum to the target', () => {
    expect(twoNumberSum([3, 4, -5, 19, 8, 10, 6], 10)).toEqual([4, 6])
  })
  it('should also work for negatives', () => {
    expect(twoNumberSum([3, 13, -9, 19, 8, 10, 6], 10)).toEqual([-9, 19])
  })
  it('should also work for zeroes', () => {
    expect(twoNumberSum([3, 0, -9, 19, 8, 10, 6], 10)).toEqual([0, 10])
  })
  it('should return an empty array if there are no 2 numbers', () => {
    expect(twoNumberSum([3, 0, -7, 19, 8, 11, 6], 10)).toEqual([])
  })
  it('should not count the same number twice', () => {
    expect(twoNumberSum([5, 0, 3, 19, 8, 11, 7], 10)).toEqual([3, 7])
  })
})