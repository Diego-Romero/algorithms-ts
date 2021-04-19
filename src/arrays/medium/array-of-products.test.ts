/**
 * Write a function that takes a non empty array of integers, and returns as an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
 * 
 * You are expected to solve this problem without division.
 */

import { productSum } from "../../recursion/product-sum.test";

// this has a really easy solution in O(n^2) with a brute force loop or in O(N) if using division, but it can be solved using 2 arrays, to calculate all the products available to the left and to the right, by iterating frontwards and backwards

export function arrayOfProducts(array: number[]): number[] {
  let leftToRight = [], rightToLeft = [], currentProductSum = 1;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) leftToRight.push(1)
    else {
      currentProductSum = array[i - 1] * currentProductSum;
      leftToRight.push(currentProductSum)
    }
  }
  currentProductSum = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    if (i === array.length - 1) rightToLeft.push(1)
    else {
      currentProductSum = array[i + 1] * currentProductSum;
      rightToLeft.unshift(currentProductSum)
    }
    
  }
  console.log(leftToRight, rightToLeft)
  const result = []
  for (let i = 0; i < array.length; i++) {
    result.push(rightToLeft[i] * leftToRight[i])
  }
  return result;
}

describe('array of products', () => {
  test('should return the correct products', () => {
    expect(arrayOfProducts([5,1,4,2])).toEqual([8, 40, 10, 20])
  })
  
})

