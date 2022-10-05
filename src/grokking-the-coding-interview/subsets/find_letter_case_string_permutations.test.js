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
// const find_letter_case_string_permutations = function (str) {
//   permutations = [str];

//   // need to iterate for every char in the string, need to add both the lower and upper case
//   for (let i = 0; i < str.length; i++) {
//     // for all the current pers we have, need to add a new one with the current char as caps
//     const currentChar = str[i];
//     if (isNaN(currentChar)) {
//       const length = permutations.length;
//       for (let j = 0; j < length; j++) {
//         const newString = permutations[j].slice().split("");
//         newString[i] = currentChar.toUpperCase();
//         permutations.push(newString.join(""));
//       }
//     }
//   }

//   return permutations;
// };

const generate_generalized_abbreviation = function (word) {
  const result = [];
  function helper(i, string) {
    // ab7c
    if (i === string.length) result.push(string);
    else {
      const letter = string[i];
      if (isNaN(letter)) {
        // character is not a number.
        const copy = string.split("");
        copy[i] = letter.toUpperCase();
        helper(i + 1, copy.join());
      }
      helper(i + 1, string);
    }
  }
  helper(0, word.toLowerCase());
  return result;
};

// console.log(
//   `String permutations are: ${find_letter_case_string_permutations("ad52")}`
// );
// console.log(
//   `String permutations are: ${generate_generalized_abbreviation("ab7c")}`
// );

describe("string permutation by changing letter case", () => {
  test("test", () => {
    const result = generate_generalized_abbreviation("ab7c");
    console.log("result");
    console.log(result);
  });
});
