// In an array of unique numbers find the 2 numbers that will give the target sum.
// We can assume that there will always be at least one number that gives the result.
// return an array with the 2 numbers in any order

// clarifying questions: will the numbers always be present? should we check for non number types? Should we check for upper and lower bounds?
// brute force solution could be done in N^2, if we loop through the array 2 times, skipping the number.

// export function twoNumberSum(array: number[], targetSum: number) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (i !== j && array[i] + array[j] === targetSum) {
//         return [array[i], array[j]]
//       }
//     }
//   }
//   return []
// }

// optimal solution in O(N), using N memory as well, to get O(1) retrieval
export function twoNumberSum(array: number[], targetSum: number) {
  const map = new Map()
  array.forEach(n => map.set(n, null))
  for (let n of array) {
    const target = targetSum - n;
    if (target !== n && map.has(target))
      return [n, target]
  }
  return []
}