// O(N ^ 2) time | space
// export function longestSubstringWithoutDuplication(string: string) {
//   let left = 0,
//     right = 1;
//   let longest: string = string[0];
//   let set = new Set<string>(string[0]);
//   while (right < string.length) {
//     if (set.has(string[right])) {
//       // need to move left, until I have removed the one at right
//       while (set.has(string[right])) {
//         set.delete(string[left]);
//         left++;
//       }
//       set = new Set<string>(string[right]);
//       left = right;
//       right++;
//     } else {
//       const sub = string.substring(left, right + 1);
//       console.log(sub);
//       if (sub.length > longest.length) longest = sub;
//       set.add(string[right]);
//       right++;
//     }
//   }

//   return longest;
// }

// O(N) time | space
export function longestSubstringWithoutDuplication(string: string) {
  const map: { [key: string]: number } = {};
  let longest = string[0];
  let prev = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (map[char]) {
      // found overlap
      prev = map[char] + 1;
      map[char] = i;
    } else {
      map[char] = i;
    }

    const substring = string.substring(prev, i + 1);
    console.log(substring);
    if (substring.length > longest.length) longest = substring;
  }
  console.log(longest);

  return longest;
}

describe("longest substring without duplication", () => {
  test("should work", () => {
    const string = "clementisacap";
    expect(longestSubstringWithoutDuplication(string)).toEqual("mentisac");
  });
});

/**
0123456789112
clementisacap
{
	c: 0,
	l: 1,
	e: 2,
	m: 3,

}
- need to check at every point the current string

at every step we move, and record, if the char at r is in the set, we move left until its not anymore
if r has char in set, move left until right, removing all chars in set
once we reach r, we insert to set and move right one
xxxabcdxxx
       l
       r
			 
set = [x, a, b, c, d]

abcxxx
    l
    r
		
abcxxabcd
    l
        r

return the longest possible substring without duplicated characters
- assume that there can only be one longest possible substring

examples
xxxabcdxxx = abcdx or xabcd
abcxxx = abcdx
xxxabc = xabc
*/
