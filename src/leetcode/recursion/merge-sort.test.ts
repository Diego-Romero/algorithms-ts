function sortArray(array: number[]): number[] {
  // divide the list in half, until there is only one
  return divide(array);
}

// keep splitting until there is only one number
function divide(array: number[]): number[] {
  // keep subdiving the arrays until they are of length 1
  if (array.length === 1) return array;
  let left = 0,
    right = array.length;
  const mid = Math.floor(right + left) / 2;
  const leftArray = divide(array.slice(left, mid));
  const rightArray = divide(array.slice(mid));
  const merged = mergeLists(leftArray, rightArray);
  return merged;
}

// merges 2 lists of numbers
function mergeLists(a1: number[], a2: number[]): number[] {
  let p1 = 0,
    p2 = 0;
  let result: number[] = [];
  while (p1 < a1.length || p2 < a2.length) {
    // check if one of them is empty
    if (p1 >= a1.length) {
      result.push(a2[p2]);
      p2++;
    } else if (p2 >= a2.length) {
      result.push(a1[p1]);
      p1++;
    } else {
      const first = a1[p1],
        second = a2[p2];
      if (first <= second) {
        result.push(first);
        p1++;
      } else {
        result.push(second);
        p2++;
      }
    }
  }

  return result;
}

const array = [5, 2, 3, 1, 2, 8, 7, 6, 9];
//             l
// 	                    r
console.log(sortArray(array));

describe("merge sort", () => {
  test("should sort", () => {
    console.log(sortArray(array));
  });
});
