function URLify(s: string, trueLength: number): string {
  let last = s.length - 1;
  const chars = s.split("");
  for (let i = trueLength - 1; i > 0; i--) {
    const char = chars[i];
    if (char !== " ") {
      chars[last] = char;
      chars[i] = "";
      last += -1;
    } else {
      chars[last] = "0";
      last += -1;
      chars[last] = "2";
      last += -1;
      chars[last] = "%";
      last += -1;
    }
  }
  return chars.join("");
}

describe("URLify", () => {
  test("should replace spaces with %20", () => {
    const s = "Mr John Smith    ";
    //         i
    const r = "Mr%20John%20Smith";
    expect(URLify(s, 13)).toEqual(r);
  });
});
