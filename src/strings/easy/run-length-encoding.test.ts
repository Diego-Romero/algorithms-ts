/**
 * Write a function that takes in a non empty string and returns its run-length encoding
 * For example if we have a string like AAA it would return 3A
 * But we can't have more than 10 of the same chars in the same run, for example having 12 A, wouldnt be 12A, instead it would be 9A3A
 */

export function runLengthEncoding(string: string) {
  if (string.length === 0) return string;
  if (string.length === 1) return `${1}${string[0]}`;
  
  let result = "";
  let current = string[0],
  counter = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === current) {
      counter++;
      if (counter === 9) {
        // need to reset to 0
        result += counter + current;
        counter = 1;
        i++;
        current = string[i]
      }
    } else {
      writeToResult(i, current)
    }
  }
      result += counter + current;

  function writeToResult(i: number, char: string) {
      result += counter + char;
      console.log("new result:", result);
      current = string[i];
      counter = 1;
  }

  return result;
}

describe("run length encoding", () => {
  test("should encode simple words", () => {
    expect(runLengthEncoding("AAABBBCCC")).toEqual("3A3B3C");
  });

  test("should encode more complicated words that have a run of more than 10 chars", () => {
    expect(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD")).toEqual("9A4A2B4C2D");
  });
  test("should encode more complicated words that have a run of more than 10 chars but also change at 10 chars", () => {
    expect(runLengthEncoding("AAAAAAAAABC")).toEqual("9A1B1C");
  });
});
