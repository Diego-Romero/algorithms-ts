/*
Problem Statement#
Given strings s1 and s2, we need to transform s1 into s2 by deleting and inserting characters. Write a function to calculate the count of the minimum number of deletion and insertion operations.

Example 1:

Input: s1 = "abc"
       s2 = "fbc"
Output: 1 deletion and 1 insertion.
Explanation: We need to delete {'a'} and insert {'f'} to s1 to transform it into s2.
Example 2:

Input: s1 = "abdca"
       s2 = "cbda"
Output: 2 deletions and 1 insertion.
Explanation: We need to delete {'a', 'c'} and insert {'c'} to s1 to transform it into s2.
Example 3:

Input: s1 = "passport"
       s2 = "ppsspt"
Output: 3 deletions and 1 insertion
Explanation: We need to delete {'a', 'o', 'r'} and insert {'p'} to s1 to transform it into s2.
*/

// brute force, recurse, trying all possible combinations starting from several places
const findMDI = function (s1, s2) {
  // with the longest subsequence, we can find the min number of deletions and insertions needed
  const c1 = longestSubsequence(s1, s2);
  console.log(`Minimum deletions needed: ${s1.length - c1}`);
  console.log(`Minimum insertions needed: ${s2.length - c1}`);
};

// O(M * N) time and space
function longestSubsequence(s1, s2) {
  const dp = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(0));
  // console.log(dp)
  let longest = 0;
  for (let i = 1; i <= s1.length; i++) {
    const c1 = s1[i - 1];
    for (let j = 1; j <= s2.length; j++) {
      const c2 = s2[j - 1];
      // console.log(c1, c2)
      if (c1 === c2) dp[i][j] = 1 + dp[i - 1][j - 1];
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      longest = Math.max(longest, dp[i][j]);
    }
  }

  return longest;
}

findMDI("abc", "fbc");
findMDI("abdca", "cbda");
findMDI("passport", "ppsspt");

