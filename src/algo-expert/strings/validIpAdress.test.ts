/**
Given a string of length 12 or smaller, containing only digits.
Write a function that returns all the possible IP addresses that ca be created by inserting three '.' in the string.

An IP address is said to be valid if it has:
- 4 positive integers that are separated by . where each individual integer is within range of 0-255 inclusive.

an IP is invalid if any of the individual integers contains leading 0s.

valid:
192.1.0.1
99.1.1.10
1.1.1.1


invalid:
'192.168.00.1' // has a leading 0
'192.168.0.01' // has a leading 0
991.1.1.9 //  991 is bigger than 255

Clarifying questions:
- do I need to check if the string is longer than 12? No
- The minimum valid string would be 4 characters? Yes
- I need to try to create all possible combinations of this string.


Approach:
- At every step, we need to split the string in something between 1-3 characters, for example 192 would have to be tried as 1, 19, 192
- we would have to keep track of at which point in the string we are, at every part we would try the same thing, until we are at the fourth part, there if we have more than 3 chars left we will stop.
- Also before trying we need to check that this current string is a valid "Ip piece".
*/
export function validIPAddresses(string: string): string[] {
  const result: string[] = [];

  // need to break the string into three consecutive chunks at each time, checking that this current chunk is valid first
  // write a recursive function which receives the starting index and the prefix of this current string, then it iterates in threes validating this current prefix
  function recurse(prevPrefix: string, string: string, chunk: number) {
    if (chunk === 5 && string.length > 0) return; // there are still characters left
    if (chunk === 4 && string.length >= 4) return; // we have more characters
    if (chunk === 5 && string.length === 0) {
      result.push(prevPrefix);
      return;
    }
    for (let i = 0; i < 3; i++) {
      // we always need to check the first 3 chars available in the string
      const prefix = string.substring(0, i + 1); // 1
      const restOfString = string.substring(i); // the rest
      // check that our new prefix is valid and that it doesn't starts with a 0
      if (validIpChunk(prefix)) {
        const newPrefix = prevPrefix + prefix + (chunk === 4 ? "" : ".");
        recurse(newPrefix, restOfString, chunk + 1);
      }
    }
  }
  recurse("", string, 1);
  return result;
}

function validIpChunk(string: string): boolean {
  if (string.length > 1 && string[0] === "0") return false; //  01.1.1.1 or 0.0
  const number = parseInt(string);
  if (number < 0 || number > 255) return false;
  return true;
}

describe("validIPAddresses", () => {
  test("should work", () => {
    /**
     * 1.
     * 1.9,                               1.92, 1.921.
     * 1.9.2. 1.9.21. 1.9.216
     * 1.9.2.1680 invalid
     * 19.
     */
    const input = "1921680";
    const result = validIPAddresses(input);
    console.log(result);

    const output = [];
  });
});
