/**
 * An array containing 10 integers (0-9)
 * Input: [1,2,3,4,5,6,7,8,9,0]
 * Output: (123) 456-7890
 */

function createPhoneNumber(arr) {
    const first = arr.slice(0, 3).join('')
    const second = arr.slice(3, 6).join('')
    const third = arr.slice(6, 10).join('')

    return `(${first}) ${second}-${third}`
}

describe('create phone number', () => {
  test('should use slice method', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const result = "(123) 456-7890";
    expect(createPhoneNumber(array)).toEqual(result);
  })
  
  
})
