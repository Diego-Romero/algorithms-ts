function stringCompression(str: string): string {
  let result = "";
  let count = 0;
  let char = str[0]; // a
  for (let c of str.split("")) {
    if (c === char) count++;
    else {
      result += `${char}${count}`;
      char = c;
      count = 1;
    }
  }
  result += `${char}${count}`;

  return result.length < str.length ? result : str;
}

describe("string compression", () => {
  test("should work", () => {
    expect(stringCompression("aaabbcccaaa")).toEqual("a3b2c3a3");
  });
});
