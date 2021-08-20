// O(N) time and space
export function longestBalancedSubstring(string: string) {
  let longest = 0;
  const stack: number[] = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    // add the index of the open bracket
    if (char === "(") stack.push(i);
    if (char === ")") {
      const openIndex = stack.pop();
      if (openIndex) longest = Math.max(longest, i - openIndex + 1);
    }
  }
  return longest;
}

describe("longest balanced substring", () => {
  test("should work when the string is at the end", () => {
    const string = "())()(()())"; 
    expect(longestBalancedSubstring(string)).toEqual(8);
  });
  test("should work when the string is in the middle", () => {
    const string = "((((())(("; // if there are more open than close
    const result = 4;
    expect(longestBalancedSubstring(string)).toEqual(result);
  });

  test("should work when the string is at the start", () => {
    const string = "()()((()(()";
    const result = "()()";
    expect(longestBalancedSubstring(string)).toEqual(result);
  });
});

/**
Return the longest balanced substring
"(()))("

- iterate through the string, checking how many open and closed we have
- if I reach a string that has the same open as closed, move to the right
- whenever I reach an amount bigger than the next one, attempt to check if the string is balanced
*/
