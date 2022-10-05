/*
- The function should reverse the words in a string which are separated by one or more whitespaces.

So for example "tim is great" we return "great is tim"

but if we have one or more whitespaces we should return the words separated by the same amount of whitespaces.
i.e "whitespaces    4" -> "4    whitespaces"

note: not allowed to use any built in split or reverse methods or functions. However we are allowed to use the join method/function
also the input string is not always guaranteed to contain words.


Clarifying questions:
- Can the string be empty and it would just be whitespaces? yes

Examples:



Approach:
Brute force:
- iterate from left to right, we keep track of the word until we have found a whitespace
- whenever we encounter a whitespace we push into our results array the current word,
- Then we count the amount of whitespaces until we have found a character that is not a ' '.
- we push into our results array but we put it in the start of the array.
*/

// approach in O(N) time | space.
export function reverseWordsInString(string: string) {
  const result: string[] = [];
  let countingWhiteSpaces = false;
  let currentString = "";
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (!countingWhiteSpaces) {
      if (char !== " ") {
        currentString += char;
      } else {
        result.unshift(currentString);
        currentString = " ";
        countingWhiteSpaces = true;
      }
    } else {
      // we are counting white spaces
      if (char !== " ") {
        // if we encounter a non white space char, we restart
        result.unshift(currentString);
        currentString = char;
        countingWhiteSpaces = false;
      } else {
        currentString += " ";
      }
    }
  }
  result.unshift(currentString);
  return result.join("");
}

describe("reverse words in a string", () => {
  test("should reverse a normal sentence separated by whitespaces", () => {
    // [great, ' ', is, ' ',  tim]
    expect(reverseWordsInString("tim is great")).toEqual("great is tim"); // great
  });
  test("should reverse a sentence that is separated by multiple whitespaces", () => {
    expect(reverseWordsInString("whitespaces    4  2")).toEqual(
      "2  4    whitespaces"
    );
  });
  test("should work with an empty string", () => {
    expect(reverseWordsInString("")).toEqual("");
  });
  test("should work with a string with just white spaces", () => {
    expect(reverseWordsInString("  ")).toEqual("  ");
  });
});
