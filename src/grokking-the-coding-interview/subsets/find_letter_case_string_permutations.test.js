/*
Problem Statement#
Given a string, find all of its permutations preserving the character sequence but changing case.

Example 1:

Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52" 
Example 2:

Input: "ab7c"
Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"
*/

// approach using BFS
// O(N * 2 ^ N) since we have 2 ^ N permutations this is for time and space
const find_letter_case_string_permutations = function (str) {
  permutations = [str];

  // need to iterate for every char in the string, need to add both the lower and upper case
  for (let i = 0; i < str.length; i++) {
    // for all the current pers we have, need to add a new one with the current char as caps
    const currentChar = str[i];
    if (isNaN(currentChar)) {
      const length = permutations.length;
      for (let j = 0; j < length; j++) {
        const newString = permutations[j].slice().split("");
        newString[i] = currentChar.toUpperCase();
        permutations.push(newString.join(""));
      }
    }
  }

  return permutations;
};

// console.log(
//   `String permutations are: ${find_letter_case_string_permutations("ad52")}`
// );
console.log(
  `String permutations are: ${find_letter_case_string_permutations("ab7c")}`
);
