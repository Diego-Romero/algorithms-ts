/*
Problem Statement#
Given two strings ‘s1’ and ‘s2’, find the length of the longest subsequence which is common in both the strings.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: s1 = "abdca"
       s2 = "cbda"
Output: 3
Explanation: The longest common subsequence is "bda".
Example 2:

Input: s1 = "passport"
       s2 = "ppsspt"
Output: 5
Explanation: The longest common subsequence is "psspt".
*/

// finding the longest common subsequence
// very similar to
// const findLCSLength = function (s1, s2) {
//   function recurse(i1, i2, count) {
//     if (i1 === s1.length || i2 === s2.length) return 0;

//     let p1 = 0;
//     if (s1[i1] === s2[i2]) p1 = recurse(i1 + 1, i2 + 1) + 1;
//     const p2 = recurse(i1, i2 + 1);
//     const p3 = recurse(i1 + 1, i2);
//     return Math.max(p1, p2, p3);
//   }

//   return recurse(0, 0, 0);
// };

const findLCSLength = function (s1, s2) {
  const dp = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(0));
  let longest = 0;

  for (let i = 1; i <= s1.length; i++) {
    const s1Char = s1[i - 1];
    for (let j = 1; j <= s2.length; j++) {
      const s2Char = s2[j - 1];
      if (s1Char === s2Char) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      longest = Math.max(longest, dp[i][j]);
    }
  }
  console.table(dp);

  return longest;
};

console.log(
  `Length of Longest Common Subsequence: ---> ${findLCSLength("abdca", "cbda")}`
);
console.log(
  `Length of Longest Common Subsequence: ---> ${findLCSLength(
    "passport",
    "ppsspt"
  )}`
);
