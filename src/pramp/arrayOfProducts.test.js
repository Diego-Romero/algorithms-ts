/**
Given an array of integers arr, you’re asked to calculate for each index i the product of all integers except the integer at that index (i.e. except arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers and returns an array of the products.

Solve without using division and analyze your solution’s time and space complexities.

Examples:

input:  arr = [8, 10, 2]
output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

input:  arr = [2, 7, 3, 4]
output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3]
Constraints:

[time limit] 5000ms

[input] array.integer arr

0 ≤ arr.length ≤ 20
[output] array.integer


Easy solution using O(N^2).
 */

function arrayOfArrayProducts(array) {
  const leftToRight = [],
    rightToLeft = [],
    result = [];

  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product *= array[i];
    leftToRight.push(product);
  }
  console.log(leftToRight);

  product = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    product *= array[i];
    rightToLeft.unshift(product);
  }

  console.log(rightToLeft);

  for (let i = 0; i < array.length; i++) {
    // need to get both numbers from left and from right
    let currentProduct = 1;
    if (i - 1 >= 0) currentProduct *= leftToRight[i - 1];
    if (i + 1 <= array.length - 1) currentProduct *= rightToLeft[i + 1];
    result.push(currentProduct);
  }

  return result;
}

describe("products of array array", () => {
  test("it should work", () => {
    const input = [2, 7, 3, 4],
      output = [84, 24, 56, 42];
    const result = arrayOfArrayProducts(input);
    expect(result).toEqual(output);
  });

  test("it should work 2", () => {
    const input = [8, 10, 2],
      output = [20, 16, 80];
    const result = arrayOfArrayProducts(input);
    console.log(result);
    expect(result).toEqual(output);
  });
});
