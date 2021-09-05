/*
Problem Statement#
Given an array of positive numbers, where each element represents the max number of jumps that can be made forward from that element, write a program to find the minimum number of jumps needed to reach the end of the array (starting from the first element). If an element is 0, then we cannot move through that element.

Example 1:

Input = {2,1,1,1,4}
Output = 3
Explanation: Starting from index '0', we can reach the last index through: 0->2->3->4
Example 2:

Input = {1,1,3,6,9,3,0,1,3}
Output = 4
Explanation: Starting from index '0', we can reach the last index through: 0->1->2->3->8

*/

// brute force approach
// this could take up to 2 ^ N time
// const countMinJumps = function (jumps) {
//   // recursively try to jump from the current point forwards using all the possible elements
//   let min = jumps.length;

//   function recurse(index, count) {
//     if (index >= jumps.length - 1) {
//       // record and finish
//       min = Math.min(min, count);
//       return;
//     }

//     const step = jumps[index]; // 2
//     if (step < 1) return; // this is not a possible path
//     // we can move from this step down to 1
//     for (let i = step; i >= 1; i--) {
//       // 2, 1
//       // this will include 1 as well
//       recurse(index + i, count + 1);
//     }
//   }

//   recurse(0, 0);
//   return min;
// };

// console.log(`Minimum jumps needed: ---> ${countMinJumps([2, 1, 1, 1, 4])}`);
// console.log(
//   `Minimum jumps needed: ---> ${countMinJumps([1, 1, 3, 6, 9, 3, 0, 1, 3])}`
// );

// find a simple recursive way to solve this
function minNumberOfJumps(array) {
  let min = Number.MAX_SAFE_INTEGER;

  

  recurse(0, 0);

  return min;
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;

// console.log(minNumberOfJumps([1, 1, 3, 6, 9, 3, 0, 1, 3]));
console.log(minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]));
