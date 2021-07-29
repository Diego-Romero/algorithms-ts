export function indexEqualsValue(array: number[]) {
  let result: number = Number.MAX_SAFE_INTEGER;
  let left = 0,
    right = array.length - 1;

  while (left < right) {
    const mid = Math.floor((right - left) / 2);
    console.log(left, right, mid);
    if (array[mid] < mid) left = mid + 1;
    else if (array[mid] > mid) right = mid - 1;
    else {
      result = Math.min(result, mid);
      right = mid - 1;
    }
  }

  return array[left] === left ? left : -1;
}

describe("index equals value", () => {
  test("should work", () => {
    const array = [-5, -4, -3, -2, -1, 0, 1, 3, 5, 6, 7, 11, 12, 14, 19, 20];
    expect(indexEqualsValue(array)).toBe(11);
  });
});

/**
- sorted array of distinct integers, find the first possible value!
- simple solution in O(N)

valid
  0.  1.  2.  3.  4. 5. 6. 7. 8. 9. 10 11  12. 13. 14. 15
[-5, -4, -3, -2, -1, 0, 1, 3, 5, 6, 7, 11, 12, 14, 19, 20]

  0.  1. 2. 3. 4. 5. 6
[-5, -3, 0, 3, 4, 5, 9]

[0]

  0.  1. 2  3. 4. 5  6
[-5, -3, 0, 1, 2, 4, 6]

  0.  1. 2  3. 4. 5  6
[ 0,  2, 3, 5, 6, 7, 8]

  0.  1. 2  3. 4. 5  6
[ -1, 0, 2, 5, 6, 7, 8]

  0.  1. 2  3. 4. 5  6  7. 8  
[ -1, 0, 1, 3, 6, 7, 8, 9, 10]

invalid
[1]
[-5, -3, 0, 1, 2, 4, 7]
[]



return the first index in the array that is equal to the value at that index


*/
