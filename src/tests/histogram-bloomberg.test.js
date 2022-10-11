// Histograms

// Input: a sequence of points, and a sequence of boundaries
// Output: a sequence containing the number of points which lie between each pair of adjacent boundaries

// === Example ===
// Input:
//   Point: [2.3, 4.5, 7.8]
//   Boundaries: [0, 5, 10]
// Output: [2, 1]

// === Example 2 ===
// Input:
//   Point: [-1, 0, 2.3, 4.5, 7.8, 10, 11]
//   Boundaries: [0, 5, 10]
// Output: [3, 2]

// === Example 2.1 ===
// Input:
//   Point: [11]
//   Boundaries: [0, 5, 10]
// Output: [3, 2]

// === Example 2.1 ===
// Input:
//   Point: [11]
//   Boundaries: [5, 5, 10]
// Output: [3, 2]

// === Example 3 ===
// Input:
//   Point: []
//   Boundaries: [0, 5, 10]
// Output: [0, 0]

// === Example 4 ===
// Input:
//   Point: []
//   Boundaries: [0, 5, 10]
// Output: [0, 0]

/**
 - boundaries are inclusive
 - upper bound is exclusive
 - points array is not sorted
 - boundaries is sorted
 - negative numbers are allowed
 - we need a counter for every boundary that we have
 - just numbers in the expected input
 - ignore underflow and overflow errors
 */

/**
 - avoid N ^ 2 || N * M
 
 - P => points, P Log P, M = boundaries
 - left to right iteration in the points, checking for the numbers in the range
 - increasing a local counter for that range, once we move onto the next one, we just push to the results array, need to do an extra push in the end for the latest counter
 - what happens when we reach the end of the boundaries? We just stop
 - O(P log P + M)
 */

// === Example 2 ===
// Input:
// counter = 1, result = [3, 1]
//   Point: [-1, 0, 2.3, 4.5, 7.8, 10, 12]
//                                  p
//   Boundaries: [0, 5, 10]
//                       s. e
// Output: [2, 1]

// we would like to count how many points we have inside of each of the following boundaries.
//    const result = histograms([-1, 0, 2.3, 4.5, 7.8, 10, 12], [0, 5, 10]);

/**
 * Brute force approach:
 * - Iterate through every pair of points that we have in the boundaries array.
 * - For every pair of points, we need to count the number of numbers that are inside that range (inclusive).
 * - This would take (B * P) Where B are the boundaries and P are the points.
 *
 * It is possible to come to a better solution which would run in O(P), as there should also be more Points than boundaries?
 * We would iterate through every number in P, whilst keeping track to the numbers that we have in our boundaries.
 */
function histograms(points, boundaries) {
  const result = [];
  for (let i = 1; i < boundaries.length; i++) {
    const prev = boundaries[i - 1],
      current = boundaries[i];
    let counter = 0;
    for (let p of points) {
      if (p >= prev && p <= current) counter++;
    }
    result.push(counter);
  }

  return result;
}

//    const result = histograms([-1, 0, 2.3, 4.5, 7.8, 10, 12], [0, 5, 10]);
// function histograms(points, boundaries) {
//   // assume there will always be at least 2 boundaries
//   // boundaries will be sorted and unique numbers, they can be floats.
//   const result = [];
//   let start = 0,
//     end = 1;
//   points.sort((a, b) => a - b); // N log N
//   let counter = 0;
//   let i = 0;
//   while (i < points.length) {
//     if (end >= boundaries.length) break;
//     const pointer = points[i]; // -1, 0, 2.3, 4.5, 7.8, 10
//     if (pointer >= boundaries[start]) {
//       // is valid
//       if (pointer < boundaries[end]) {
//         counter++;
//         i++;
//       }
//       if (pointer >= boundaries[end]) {
//         result.push(counter);
//         counter = 0;
//         while (end < boundaries.length && pointer >= boundaries[end]) {
//           // whilst checking that indexes are right
//           end++;
//           start++;
//         }
//       }
//     } else i++;
//   }
//   if (points[i] < boundaries[end]) result.push(counter);

//   return result;
// }

// [3, 1]

describe("bloomberg histograms", () => {
  test("should work", () => {
    const result = histograms([-1, 0, 2.3, 4.5, 7.8, 10, 12], [0, 5, 10]);
    console.log(result);
    expect(result).toEqual([3, 1]);
  });
});
