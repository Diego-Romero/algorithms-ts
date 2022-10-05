/*
Problem Statement
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".


Example 4:

Input: String="cbbebi", K=10
Output: 6
Explanation: The longest substring with no more than '10' distinct characters is "cbbebi".


set = {
	a: 0,
	r: 0, 
	c: 1,
	i: 0
}
length = 2
distinct = 2
max = 4
    l
      r
 araaci

- while we have less than 2 distinct, save and move right
- when distinct > k, move left until distinct is <= k
- We could optimise by only storing k numbers in the object
*/
// const longest_substring_with_k_distinct = function (str, k) {
//   let longest = 0,
//     length = 0,
//     distinct = 0,
//     left = -1,
//     right = -1;
//   const charCount = {};

//   while (right < str.length) {
// 		if (distinct <= k) {
// 			// record and move right
//       right++;
// 			const char = str[right];
//       charCount[char] ? charCount[char]++ : (charCount[char] = 1);
//       if (charCount[char] === 1) distinct++; // whenever we add a new char, we increase distinct count
//       length++;
//       if (distinct <= k) longest = Math.max(longest, length);
//     } else {
// 			left++;
// 			const char = str[left];
//       charCount[char]--;
//       if (charCount[char] === 0) distinct--;
//       length--;
//     }
//   }

//   return longest;
// };

/*
{a: 2, c: 1}
   l
     r
 araaci
 012345
*/
const longest_substring_with_k_distinct = function (str, k) {
  const map = {};
  let start = 0,
    distinct = 0,
    longest = 0;

  for (let end = 0; end < str.length; end++) {
    const endChar = str[end],
      startChar = str[start];
    if (!map[endChar]) {
      distinct++;
      map[endChar] = 0;
    }
    map[endChar] = map[endChar] + 1; // does map[endChar]++ works?
    while (distinct > k) {
      map[startChar] = map[startChar] - 1;
      if (map[startChar] === 0) {
        distinct--;
        delete map[startChar];
      }
      start++;
    }
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

describe("longest substring with k distinct", () => {
  test("should work with a basic example", () => {
    const s = "araaci",
      k = 2;
    expect(longest_substring_with_k_distinct(s, k)).toEqual(4);
  });
});
