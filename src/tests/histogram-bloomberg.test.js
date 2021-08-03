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

function histograms(points, boundaries) {
  // assume there will always be at least 2 boundaries
  // boundaries will be sorted and unique numbers, they can be floats.
  const result = [];
  let start = 0,
    end = 1;
  points.sort((a, b) => a - b); // N log N
  let counter = 0;
  let i = 0;
  while (i < points.length) {
    if (end >= boundaries.length) break;
    const pointer = points[i]; // -1, 0, 2.3, 4.5, 7.8, 10
    if (pointer >= boundaries[start]) {
      // is valid
      if (pointer < boundaries[end]) {
        counter++;
        i++;
      }
      if (pointer >= boundaries[end]) {
        result.push(counter);
        counter = 0;
        while (end < boundaries.length && pointer >= boundaries[end]) {
          // whilst checking that indexes are right
          end++;
          start++;
        }
      }
    } else i++;
  }
  if (points[i] < boundaries[end]) result.push(counter);

  return result;
}

const result = histograms([-1, 0, 2.3, 4.5, 7.8, 10, 12], [0, 5, 10]);
console.log(result);
// [3, 1]
