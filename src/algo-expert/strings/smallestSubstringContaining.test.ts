// solution in N^2 time and O(N) space
export function smallestSubstringContaining(
  bigString: string,
  smallString: string
) {
  let result = bigString;
  const map = new Map<string, number>();
  smallString
    .split("")
    .forEach((c) => map.set(c, map.has(c) ? map.get(c)! + 1 : 1));

  let left = 0,
    foundChar = map.size,
    right = 0;

  while (right < bigString.length || left < bigString.length) {
    // move right when we need to have all the chars in the string
    if (foundChar > 0 && right < bigString.length) {
      const char = bigString[right];
      console.log("searching right", right);
      if (map.has(char)) {
        map.set(char, map.get(char)! - 1);
        if (map.get(char) === 0) foundChar--;
      }
      right++;
    } else {
      // if we have found all the chars record
      if (foundChar === 0) {
        const substring = bigString.substring(left, right);
        if (substring.length < result.length) result = substring;
        console.log(substring);
        const char = bigString[left];
        if (map.has(char)) {
          map.set(char, map.get(char)! + 1);
          if (map.get(char)! > 0) foundChar++;
        }
      }
      left++;
    }
  }

  return result;
}
describe("smallest substring containing", () => {
  test("should work when the smaller example is in the end", () => {
    const big = "xabcxayyyxxabca";
    const small = "aabc";
    const result = "abca";
    expect(smallestSubstringContaining(big, small)).toEqual(result);
  });
  test("should work when the smaller example is at the start", () => {
    const big = "xabcxayyyxxabxyca";
    const small = "aabc";
    const result = "abcxa";
    expect(smallestSubstringContaining(big, small)).toEqual(result);
  });
  test("should work with a basic example", () => {
    const big = "xzyxaxcbxyz"; // 2 pointer approach, move until the first point we find a value
    const small = "abc"; // { a: 1, b: 1, c: 1}, count = 3, whenever we reach 0 decrease count
    const result = "axcb";
    expect(smallestSubstringContaining(big, small)).toEqual(result);
  });
  test("should work with a basic example with duplicates", () => {
    const big = "xzyxaxcbaxyz";
    const small = "aabc";
    const result = "axcba";
    expect(smallestSubstringContaining(big, small)).toEqual(result);
  });
});

/*
Find the smallest possible substring containing all the characters in the small substring
it also needs to contain the duplicate chars in the smaller substring

*/
