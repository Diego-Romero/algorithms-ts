import { nonConstructibleChange } from "./non-constructible-change";


describe("non-constructible-change", () => {
  test('should return the minimum change when there are unique numbers', () => {
    expect(nonConstructibleChange([1,2,5])).toBe(4)
  })
  test('should return the minimum change when there are duplicate numbers', () => {
    expect(nonConstructibleChange([1,1,3,5])).toBe(11)
  })
  test('should return the minimum change when there are duplicate numbers and is unsorted', () => {
    expect(nonConstructibleChange([1,3,5,1])).toBe(11)
  })
});