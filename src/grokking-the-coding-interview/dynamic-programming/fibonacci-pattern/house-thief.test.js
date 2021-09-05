/*
There are n houses built in a line. A thief wants to steal the maximum possible money from these houses. The only restriction the thief has is that he can’t steal from two consecutive houses, as that would alert the security system. How should the thief maximize his stealing?

Problem Statement#
Given a number array representing the wealth of n houses, determine the maximum amount of money the thief can steal without alerting the security system.

Example 1:

Input: {2, 5, 1, 3, 6, 2, 4}
Output: 15
Explanation: The thief should steal from houses 5 + 6 + 4
Example 2:

Input: {2, 10, 14, 8, 1}
Output: 18
Explanation: The thief should steal from houses 10 + 8

*/

// /*
// In a recursive solution, we want to either start with the first or the second one, and always be checking for the next second or third
// this solution would be quite inefficient, as it would take 2 ^ N
// */
// const findMaxSteal = function (houses) {
//   let max = 0;

//   // either steal from this one, or skip it and start from the next one
//   function recurse(index, robbed) {
//     if (index >= houses.length) return;
//     const houseLoot = houses[index];
//     // record at every house the possible combinations
//     max = Math.max(max, houseLoot + robbed);
//     recurse(index + 2, houseLoot + robbed); // rob this house and move to next next
//     recurse(index + 1, robbed); // dont rob this one and move to the next
//   }

//   recurse(0, 0);
//   return max;
// };

/*
in a memo approach we can start a dp array to store the previously solved results
this will give us O(N) time and space
*/
// const findMaxSteal = function (houses) {
//   const dp = []; // array were we will store the results from the back

//   // we will keep calculating at every index what is the largest possible profit
//   function recurse(index) {
//     if (index >= houses.length) return 0;

//     if (!dp[index]) {
//       const robHouse = houses[index] + recurse(index + 2); // rob this current house and the one after
//       const skipHouse = recurse(index + 1);
//       dp[index] = Math.max(robHouse, skipHouse);
//     }

//     return dp[index];
//   }

//   return recurse(0);
// };
/*
Bottom up approach with tabulation
*/
const findMaxSteal = function (houses) {
  if (houses.length === 0) return 0;

  const dp = new Array(houses.length + 1).fill(0);
  dp[0] = 0;
  dp[1] = houses[0]; // case where there is only one house

  for (let i = 1; i < houses.length; i++) {
    dp[i + 1] = Math.max(houses[i] + dp[i - 1], dp[i]);
  }

  return dp[houses.length];
};

console.log(`Maximum stealing: ---> ${findMaxSteal([2, 5, 1, 3, 6, 2, 4])}`); // 15 = 5 + 6 + 4
console.log(`Maximum stealing: ---> ${findMaxSteal([2, 10, 14, 8, 1])}`); // 18, 10 + 8
