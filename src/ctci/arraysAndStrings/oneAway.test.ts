// O(N) where N is the shortest string
function oneAway(s1: string, s2: string) {
  const diff = Math.abs(s1.length - s2.length);
  if (diff > 1) return false;

  const minLength = Math.min(s1.length, s2.length);
  let edited = false;
  for (let i = 0; i < minLength; i++) {
    if (s1[i] !== s2[i]) {
      if (edited) return false;
      else edited = true;
    }
  }

  if (diff === 1 && edited) {
    return false;
  }

  return true;
}

describe("ctci one away", () => {
  test("should return true if they are one edit away", () => {
    expect(oneAway("pales", "pale")).toBeTruthy();
    expect(oneAway("pales", "palex")).toBeTruthy();
    expect(oneAway("", "")).toBeTruthy();
    expect(oneAway("a", "")).toBeTruthy();
  });

  test("should return false if they are not one edit away", () => {
    expect(oneAway("pales", "pal")).toBeFalsy();
    expect(oneAway("pales", "palxt")).toBeFalsy();
    expect(oneAway("ab", "x")).toBeFalsy();
  });
});
