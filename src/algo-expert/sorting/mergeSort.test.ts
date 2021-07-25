export function mergeSort(initial: number[]) {
  function helper(array: number[]): number[] {
    if (array.length === 1) return array;
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    const leftSorted = helper(left);
    const rightSorted = helper(right);
    const merged = merge(leftSorted, rightSorted);
    return merged;
  }

  return helper(initial);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let l = 0,
    r = 0;
  while (l < left.length || r < right.length) {
    if (l === left.length) {
      result.push(right[r]);
      r++;
    } else if (r === right.length) {
      result.push(left[l]);
      l++;
    } else {
      if (left[l] <= right[r]) {
        result.push(left[l]);
        l++;
      } else {
        result.push(right[r]);
        r++;
      }
    }
  }
  return result;
}

describe("Mergesort", () => {
  test("merge function should work", () => {
    expect(merge([5, 8], [2, 9])).toEqual([2, 5, 8, 9]);
    expect(merge([2, 5, 8, 9], [3, 5, 6])).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });

  test("should sort in N log N", () => {
    const array = [6, 5, 2, 3, 5, 8, 9];
    expect(mergeSort(array)).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
