/**
Approach:
- For the recursive approach we would like to insert each element at the current index.
- We need to create an outside result array and an inner function (closure) that computes the value
- we recursively keep adding the current element at every position in the array that we receive including 0 and after the last element.
- whenever the index has reached the length of the array, we pushed the current array into our results
*/
export function getPermutations(input: number[]): number[][] {
  const result: number[][] = [];
  function recurse(index: number, array: number[]) {
    if (index === input.length) result.push(array);
    else {
      // we want to insert this number at every position in the array, including the last one (we have to create a new array)
      const current = input[index]; // 1
      for (let i = 0; i <= array.length; i++) {
        const copy = [...array];
        copy.splice(i, 0, current);
        recurse(index + 1, copy);
      }
    }
  }

  recurse(0, []);
  console.log(result);
  return result;
}

describe("get permutations", () => {
  test("should get all the permutations", () => {
    const input = [1, 2, 3];
    const result = [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ];
    expect(getPermutations(input)).toEqual(result);
  });
});
