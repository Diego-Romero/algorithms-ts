export function arrayOfProducts(array: number[]) {
  if (array.length <= 1) return array;
  let result = [];
  let leftToRight = [];
  let rightToLeft = [];
  let count = 1;
  for (let i = 0; i < array.length; i++) {
    count = count * array[i];
    leftToRight.push(count);
  }
  count = 1;

  for (let i = array.length - 1; i >= 0; i--) {
    count = count * array[i];
    rightToLeft.unshift(count);
  }

  // console.log(leftToRight)
  // console.log(rightToLeft)

  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      result.push(rightToLeft[i + 1]);
    } else if (i === array.length - 1) {
      result.push(leftToRight[i - 1]);
    } else {
      result.push(leftToRight[i - 1] * rightToLeft[i + 1]);
    }
  }
  // console.log(result)

  return result;
}

/**
constrains:
- non empty array of integers
- return the sum of all products except that one
- can't use division
- easy solution in N^2
- solve it in O(N)

clarifying questions:
- can array be length 1?

edge cases:
- array length 2
- array length 3>
*/
