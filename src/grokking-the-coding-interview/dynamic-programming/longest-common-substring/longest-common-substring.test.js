/*
Problem Statement#
Given two strings ‘s1’ and ‘s2’, find the length of the longest substring which is common in both the strings.

Example 1:

Input: s1 = "abdca"
       s2 = "cbda"
Output: 2
Explanation: The longest common substring is "bd".
Example 2:

Input: s1 = "passport"
       s2 = "ppsspt"
Output: 3
Explanation: The longest common substring is "ssp".
*/

// basic recursive solution, trying to find a match start from each point at both strings
// starting from any string, try to find the largest
// const findLCSLength = function (s1, s2) {
//   // return the current length, so we can do top down memo

//   function recurse(i1, i2, count) {
//     if (i1 === s1.length || i2 === s2.length) return count;

//     if (s1[i1] === s2[i2]) {
//       // if they match
//       // if the current chars match, look for the next one
//       count = recurse(i1 + 1, i2 + 1, count + 1);
//     }

//     const way3 = recurse(i1, i2 + 1, 0);
//     const way2 = recurse(i1 + 1, i2, 0); // we reset the count if they don't match

//     return Math.max(count, way2, way3);
//   }
//   return recurse(0, 0, 0);
// };

// O(N * M) time & space
const findLCSLength = function (s1, s2) {
  const dp = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));
  console.log(dp);
  let longest = 0;
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
        longest = Math.max(longest, dp[i][j]);
      }
    }
  }
  console.log(dp);

  return longest;
};

console.log(
  `Length of Longest Common Substring: ---> ${findLCSLength("abdca", "cbda")}`
);

// console.log(
//   `Length of Longest Common Substring: ---> ${findLCSLength(
//     "passport",
//     "ppsspt"
//   )}`
// );
