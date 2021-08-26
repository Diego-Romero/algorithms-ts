/*
Problem Statement#
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0, 1, 1, 4, 9]

*/

const make_squares = function (arr) {
  const result = [];
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const leftVal = Math.abs(arr[left]);
    const rightVal = Math.abs(arr[right]);
    if (leftVal > rightVal) {
      result.unshift(leftVal);
      left++;
    } else {
      result.unshift(rightVal);
      right--;
    }
  }
  return result;
};

console.log(make_squares([-2, -1, 0, 2, 3]));
// const make_squares = function (arr) {
//   squares = [];
//   let left = 0;
//   let i = 0;
//   while (arr[i] < 0) i++;
//   left = i - 1;
//   let right = i;
//   // move left and right
//   while (left >= 0 || right < arr.length) {
//     if (left < 0) {
//       pushToSquares(arr[right]);
//       right++;
//     } else if (right >= arr.length) {
//       pushToSquares(arr[left]);
//       left--;
//     } else {
//       // push the smallest number possible
//       const leftVal = Math.abs(arr[left]);
//       const rightVal = Math.abs(arr[right]);
//       if (leftVal < rightVal) {
//         pushToSquares(leftVal);
//         left--;
//       } else {
//         pushToSquares(rightVal);
//         right++;
//       }
//     }
//   }

//   function pushToSquares(number) {
//     const abs = Math.abs(number);
//     squares.push(abs * abs);
//   }

//   return squares;
// };
