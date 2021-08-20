// solution in N log N
// export function largestRange(array: number[]): [number, number] {
//   array.sort((a, b) => a - b);
//   console.log(array);

//   let startIdx = 0;
//   let endIdx = 0;
//   let result: [number, number] = [0, 0];

//   for (let i = 1; i < array.length; i++) {
//     console.log(array[startIdx], array[endIdx]);
//     const cur = array[i],
//       prev = array[i - 1];
//     if (prev === cur || prev + 1 === cur) {
//       endIdx = i; // storing the indices of the array
//     } else {
//       // calculate current result and compare to this one
//       const [resultStartIdx, resultEndIdx] = result;
//       if (endIdx - startIdx > resultEndIdx - resultStartIdx)
//         result = [startIdx, endIdx];
//       // reset
//       startIdx = endIdx = i;
//     }
//   }
//   const [resultStartIdx, resultEndIdx] = result;
//   if (endIdx - startIdx > resultEndIdx - resultStartIdx)
//     result = [startIdx, endIdx];
//   // Write your code here.
//   console.log([array[result[0]], array[result[1]]]);
//   return [array[result[0]], array[result[1]]];
// }
export function largestRange(array: number[]): [number, number] {
  let result: [number, number] = [array[0], array[0]];
  const visited = new Map<number, boolean>();
  array.forEach((n) => visited.set(n, false));
  console.log(visited);
  for (let n of array) {
    // visit all the possible numbers to the left and right
    if (!visited.get(n)) {
      let start = n,
        end = n;
      visited.set(n, true);
      while (visited.has(start - 1)) {
        start -= 1;
        visited.set(start, true);
      }
      while (visited.has(end + 1)) {
        end = end + 1;
        visited.set(end, true);
      }
      console.log(n, start, end);
      if (end - start > result[1] - result[0]) result = [start, end];
    }
  }

  return result;
}

describe("largest range", () => {
  test("should work", () => {
    const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6];
    console.log(largestRange(array));
  });
});

/*
- Returns an array of length 2, representing the largest range of integers contained in the array
- 


brute force solution would be to sort the elements and get the current longest consecutive range

*/
