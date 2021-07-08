function stringRotation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    // find a starting letter
    const s2Char = s2[i];
    // console.log(s2Char);
    if (s2Char === s1[0]) {
      // we can start looking from here
      for (let j = 0; i < s1.length; j++) {
        const s1Char = s1[j];
        const s2Char = s2[(j + i) % s1.length];
        console.log(s1Char, s2Char);
      }
    }
  }
  return true;
}

describe("string rotation", () => {
  test("should work", () => {
    const result = stringRotation("waterbottle", "erbottlewat");
    console.log(result);
    // expect(stringRotation("watterbottle", "erbottlewat")).toBeTruthy();
  });
});
