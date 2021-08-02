// solution in O(2 ^(N + M)), as for every option, we increase the current amount of options that we have, by 2 | O(N + M) space, as we are doing that many amount of recursive calls.

export function interweavingStrings(one: string, two: string, three: string) {
  let result = false;

  function recurse(p1: number, p2: number, p3: number) {
    if (p1 === one.length && p2 === two.length && p3 === three.length) {
      result = true;
      return;
    }
    // base cases
    // if chars don't match, return;
    const first = p1 < one.length ? one[p1] : "";
    const second = p2 < two.length ? two[p2] : "";
    const third = three[p3];

    // if p1 matches, keep going
    if (first === third) recurse(p1 + 1, p2, p3 + 1);
    if (second === third) recurse(p1, p2 + 1, p3 + 1);

    // if p3 reaches three.length, set result to true and we can interweave them
  }
  recurse(0, 0, 0);

  return result;
}

