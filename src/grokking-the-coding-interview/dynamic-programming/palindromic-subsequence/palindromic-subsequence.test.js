/*
Problem Statement#
Given a sequence, find the length of its Longest Palindromic Subsequence (LPS). In a palindromic subsequence, elements read the same backward and forward.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: "abdbca"
Output: 5
Explanation: LPS is "abdba".
Example 2:

Input: = "cddpd"
Output: 3
Explanation: LPS is "ddd".
Example 3:

Input: = "pqr"
Output: 1
Explanation: LPS could be "p", "q" or "r".

*/

// recursive solution O(2 ^ N)
// let findLPSLength = function (st) {
//   function findLPSLengthRecursive(st, startIndex, endIndex) {
//     if (startIndex > endIndex) return 0;

//     // every sequence with one element is a palindrome of length 1
//     if (startIndex === endIndex) return 1;

//     // case 1: elements at the beginning and the end are the same
//     if (st[startIndex] === st[endIndex])
//       return 2 + findLPSLengthRecursive(st, startIndex + 1, endIndex - 1);

//     // case 2: skip one element either from the beginning or the end
//     let c1 = findLPSLengthRecursive(st, startIndex + 1, endIndex);
//     let c2 = findLPSLengthRecursive(st, startIndex, endIndex - 1);
//     return Math.max(c1, c2);
//   }

//   return findLPSLengthRecursive(st, 0, st.length - 1);
// };

let findLPSLength = function (st) {
  const dp = new Array(st.length).fill(new Array(st.length).fill(0));
  // make every sequence with an element of 1, a 1
  for (let i = 0; i < st.length; i++) {
    dp[i][i] = 1;
  }

  // we iterate from down up, and we check the characters from after the start
  for (let start = st.length - 1; start >= 0; start--) {
    for (let end = start + 1; end < st.length; end++) {
      // case 1: elements at the beinning and the end are the same
      if (st.charAt(start) == st.charAt(end)) {
        dp[start][end] = 2 + dp[start + 1][end - 1];
      } else {
        // case 2: skip one element either from teh beginning or the end
        dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
      }
    }
  }

  console.log(dp);
  return dp[0][st.length - 1];
};

// console.log("Length of LPS ---> " + findLPSLength("abdbca"));
console.log("Length of LPS ---> " + findLPSLength("cddpd"));
// console.log("Length of LPS ---> " + findLPSLength("pqr"));
