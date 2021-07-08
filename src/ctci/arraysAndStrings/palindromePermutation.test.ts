function palindromePermutation(s: string): boolean {
  const map = new Map<string, number>();
  for (const c of s.split("")) {
    const val = map.get(c);
    if (!val) map.set(c, 1);
    else map.set(c, val + 1);
  }
  let odd = false;
  for (const [k, v] of map.entries()) {
    if (v % 2 !== 0) {
      // if is not odd
      if (odd) return false;
      else odd = true;
    }
  }

  return true;
}

describe("Palindrome Permutation", () => {
  test("should return true if is the permutation of a palindrome", () => {
    expect(palindromePermutation("tactcoa")).toBeTruthy();
    expect(palindromePermutation("tactcox")).toBeFalsy();
  });
});
