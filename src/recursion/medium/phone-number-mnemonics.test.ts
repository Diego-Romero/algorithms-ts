/**
 * Write a function that returns all the possible mnemonics of a phone number in terms of letters
 */

export function phoneNumberMnemonics(phoneNumber: string) {
  const phoneLetters: { [key: number]: string[] } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const result: string[] = [];
  recurse(0, "");

  function recurse(index: number, currentString: string): void {
    const number = parseInt(phoneNumber[index]);
    // console.log(
    //   `index ${index}, number ${number}, currentstring: ${currentString}`
    // );
    if (index === phoneNumber.length) {
      result.push(currentString);
      return;
    }
    if (number === 1 || number === 0) {
      recurse(index + 1, currentString + number);
      return;
    }
    const letters: string[] = phoneLetters[number] as string[];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      recurse(index + 1, currentString + letter);
    }
  }
  console.log(result);
  return result;
}

describe("phone mnemonics", () => {
  test("should return all possile mnemonics", () => {
    const result = [
      "1w0j",
      "1w0k",
      "1w0l",
      "1x0j",
      "1x0k",
      "1x0l",
      "1y0j",
      "1y0k",
      "1y0l",
      "1z0j",
      "1z0k",
      "1z0l",
    ];
    expect(phoneNumberMnemonics("1905")).toEqual(result);
  });
});
