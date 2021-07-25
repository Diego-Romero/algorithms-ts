function calculatePalindromeWithEdits(s: string, k: number): string {
  let result = "";
  // todo: split string into left middle and right
  // todo: make the string a palindrome, by adding the necessary edits
  // todo: shift as many digits as possible to the maximum number that we can
  const array: number[] = s.split("").map((char) => parseInt(char));
  const mid = Math.round(s.length / 2); // if odd gives me half, else it rounds down
  // todo: double check indices indicate the right values
  const left: number[] = array.slice(0, mid);
  const right: number[] = array.slice(mid, array.length).reverse();
  // todo: approach will differ if length is odd
  for (let i = 0; i < left.length; i++) {
    // todo: need to check that we have enough k's,
    if (left[i] !== right[i]) {
      left[i] = Math.max(left[i], right[i]);
      k--;
    }
  }

  console.log(k);
  console.log(left, right);

  return result;
}
// dev.diego.romero@
/**
 * Whole string needs to be a palindrome, can't be parcial.
 * if our K is half of the string we can just mirror one of the sides to make it a palindrome
 * if K is more than half we can convert it to a palindrome depending on the repeating chars
 * We don't have to use all of the K's
 * Make it the largest possible number it can be
 */

describe("palindome with edits", () => {
  // describe("should work ", () => {
  //   const example = "1921";
  //   expect(calculatePalindromeWithEdits(example, 2)).toEqual("1991");
  // });
  // describe("should work if k is one shorter than the string length", () => {
  //   const example = "1921";
  //   expect(calculatePalindromeWithEdits(example, 3)).toEqual("9999");
  // });

  describe("it should work when string length is even", () => {
    const example = "11119111";
    const left = "1119",
      right = "1119";

    // const example = "9119 9119";
    // const example = "9119 9119";
    expect(calculatePalindromeWithEdits(example, 4)).toEqual("91199119");
  });

  // describe("it should work when string length is even", () => {
  //   // const example = "1111 9111";
  //   const example = "9991999";
  //   // const example = "9119 9119";
  //   expect(calculatePalindromeWithEdits(example, 4)).toEqual("91199119");
  // });
  // describe("it should work when string length is odd", () => {
  //   const example = "111129111";
  //   const workingExample = "9119 22 9119";
  //   const result = "9119229119";
  //   expect(calculatePalindromeWithEdits(example, 4)).toEqual(result);
  // });

  // describe("it should work is length 1 and K is largest", () => {
  //   const example = "1";
  //   const result = "99199";
  //   expect(calculatePalindromeWithEdits(example, 4)).toEqual(result);
  // });

  // const invalid = "Not possible";

  // it("should not work with '11122", () => {
  //   const example = "11112";
  //   const k = 1;
  //   expect(calculatePalindromeWithEdits(example, k)).toEqual(invalid);
  // });
});
