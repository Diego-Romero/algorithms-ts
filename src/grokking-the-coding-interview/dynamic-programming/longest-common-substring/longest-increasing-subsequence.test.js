/*

Problem Statement#
Given a number sequence, find the length of its Longest Increasing Subsequence (LIS). In an increasing subsequence, all the elements are in increasing order (from lowest to highest).

Example 1:

Input: {4,2,3,6,10,1,12}
Output: 5
Explanation: The LIS is {2,3,6,10,12}.
Example 1:

Input: {-4,10,3,7,15}
Output: 4
Explanation: The LIS is {-4,3,7,15}.

*/

// find the recursive solution to this, starting from all points
// O(N ^ 2) time
// const findLISLength = function (array) {
//   function recurse(currIdx, prevIdx) {
//     if (currIdx >= array.length) return 0;

//     let p1 = 0;
//     if (prevIdx === -1 || array[currIdx] > array[prevIdx]) {
//       p1 = 1 + recurse(currIdx + 1, prevIdx + 1);
//     }
//     const p2 = recurse(currIdx + 1, prevIdx + 1);
//     return Math.max(p1, p2);
//   }

//   return recurse(0, -1, 0);
// };

const findLISLength = function (array) {
	const dp = new Array(array.length + 1).fill(0).map(() => new Array(array.length + 1).fill(0));
	console.log(dp)
	let longest = 0;
	
	for (let row = 0; row < array.length; row++) {
		const rowN = array[row - 1]
		for (let col = row; col <= array.length; col++) {
			const colN = array[col - 1]
			if (colN >= rowN) dp[row][col] = 1 + dp[row][col - 1];
			else dp[row][col] = dp[row][col - 1]
			longest = Math.max(longest, dp[row][col]);
		}
	}
	
	console.log(dp)
	return longest;
};

console.log(
  `Length of Longest Increasing Subsequence: ---> ${findLISLength([
    4,
    2,
    3,
    6,
    10,
    1,
    12,
  ])}`
); // 5
// console.log(
//   `Length of Longest Increasing Subsequence: ---> ${findLISLength([
//     -4,
//     10,
//     3,
//     7,
//     15,
//   ])}`
// ); // 4
