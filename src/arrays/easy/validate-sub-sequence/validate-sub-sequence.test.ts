import { isValidSubsequence } from "./validate-sub-sequence"


describe('is valid subsequence', () => {

  it('should contain the numbers in the right sequence', () => {
    expect(isValidSubsequence(
      [5,1,22,25,6,-1,8,10],
      [1,6,-1,10]
    )).toBeTruthy()
  })
  it('should output false if is not in the right ', () => {
    expect(isValidSubsequence(
      [5,1,22,25,6,-1,8,10],
      [1,6,-1,22]
    )).toBeFalsy()
  })
})