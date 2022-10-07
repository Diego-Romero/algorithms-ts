/**
Approach:
- Very similar to doing a recursive approach for getting all the permutations
- start with an empty set, with every call we need to do one with the current set that we have, and another one with the current number added, 
Whenever we reach the index that is the same as the array.length, then we push the current set into the result array. We could use a closure for this.
*/
export function powerset(input: number[]): number[][] {
  const result: number[][] = [];
  function recurse(index: number, array: number[]) {
    if (index === input.length) result.push(array);
    else {
      // we need to add the current number to this array as well as pass the array untouched
      const current = input[index];
      const copy = [...array];
      copy.push(current);
      recurse(index + 1, array);
      recurse(index + 1, copy);
    }
  }
  recurse(0, []);
  console.log(result);
  return result;
}

describe("power sets", () => {
  test("should should work", () => {
    const input = [1, 2, 3];
    const result: number[][] = [];
    expect(powerset(input)).toEqual(result);
  });
});
