/**
 * return the sum of all numbers inside the special array
 * For every sub array inside, you need to return the numbers in the array multiplied by their level of depth, normal array is level 1, [[x]] in this case x would have to be multiplied by 2 and so on.
 */
type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth = 1): number {
  let sum = 0;
  for (let e of array) {
    if (Array.isArray(e)) sum += productSum(e, depth + 1)
    else sum += e;
  }
  console.log(array, depth, `returning: ${sum * depth}`)
  return sum * depth;
}

describe('product sum', () => {
  test('should return the product sum with just 1 level of depth', () => {
    expect(productSum([1, 2, 3])).toBe(6)
  })
  test('should return the product sum with 2 levels of depth', () => {
    expect(productSum([1, 2, [3, 2]])).toBe(13)
  })
  test('should return the product sum with many levels of depth', () => {
    expect(productSum([5, 2, [7, 1], 3, [6, [-13, 8], 4]])).toBe(16)
  })
  
})
