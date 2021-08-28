/*
Minimum Window Sort (medium)#
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted
Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.
*/

// Brute force approach in O(N^2)
// const shortest_window_sort = function (arr) {
//   console.log(arr);
//   let left = arr.length - 1;
//   // the first unsorted from left to right
//   for (let i = 0; i < arr.length - 1; i++) {
//     const current = arr[i];
//     const next = arr[i + 1];
//     // console.log(current, next);
//     if (next < current) {
//       // find the correct position to the left
//       let prev = i;
//       // console.log("found unsorted, moving left", next, arr[prev]);
//       while (prev >= 0 && next < arr[prev]) {
//         left = Math.min(left, prev);
//         // console.log(next, arr[prev], left);
//         prev--;
//       }
//     }
//   }

//   let right = 0;
//   // find first unsorted from right to left
//   for (let i = arr.length - 1; i >= 1; i--) {
//     const current = arr[i];
//     const prev = arr[i - 1];
//     console.log(current, prev);
//     if (prev > current) {
//       console.log("moving right to find correct place");
//       let next = i;
//       while (next < arr.length && prev > arr[next]) {
//         right = Math.max(right, next);
//         console.log(prev, arr[next], right);
//         next++;
//       }
//     }
//   }
//   console.log(left, right);
//   if (right === 0 && left === arr.length - 1) return 0;
//   return right - left + 1;
// };

describe("Minimum window sort", () => {
  test("should find the window that needs to be sorted", () => {
    const array = [1, 2, 5, 3, 7, 10, 9, 12];
    const result = 5;
    expect(shortest_window_sort(array)).toEqual(result);
  });

  test("should work with a more interesting example", () => {
    const array = [1, 3, 2, 0, -1, 7, 10];
    const result = 5;
    expect(shortest_window_sort(array)).toEqual(result);
  });
  test("should work when is sorted", () => {
    const array = [1, 2, 3];
    expect(shortest_window_sort(array)).toEqual(0);
  });
});
