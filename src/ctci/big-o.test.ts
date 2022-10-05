/**
 * Big O
 * Help us to calculate how efficient an algorithm is.
 */

/**
 * The most simple case is *Constant Runtime*, this returns the result immediately and is described as O(1);
 */
function constantRuntime(array: number[]): number {
  return array[0];
}

/**
 * Linear time - O(N)
 * For example a function that returns the min and max of the numbers in an array
 */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10]; // 9 is missing

function getMinMax(array: number[]): [number, number] {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  array.forEach((n) => {
    if (n < min) min = n;
    if (n > max) max = n;
  });

  /**
   * Is worth noticing here that even if we had two separate loops over the same array, the time would still be O(N)
   */
  array.forEach((n) => {
    if (n > max) max = n;
  });
  array.forEach((n) => {
    if (n < min) min = n;
  });

  return [min, max];
}

test("get min max", () => {
  expect(getMinMax(numbers)).toEqual([1, 10]);
});

// On the topic of O(N), there could be also two different sets of data, like 2 arrays, in which case the runtime would be different here
// In this case the run time would be O(N + M);
function twoArrays(a: number[], b: number[]): void {
  a.forEach((n) => console.log(n));
  b.forEach((n) => console.log(b));
}

// In the case when we are doing an operation of an array inside of another array, then we are have a multiplication
// In this case, this algorithm would be O(N * M)
function arrayInsideAnArray(a: number[], b: number[]) {
  a.forEach((n) => {
    b.forEach((m) => {
      console.log(n * m);
    });
  });
}

/**
 * Lets talk about a more efficient way now, logarithmic time - also expressed as Log(N).
 * This is when we split the set of data by half every time, as you can imagine is far more efficient than a linear search or traverse, but not as good as constant.
 // the implementation can be done recursively or iteratively, lets experiment with both
 Note: Bear in mind this is keeping in mind that the array is sorted in some way.
 */
function binarySearchIteratively(array: number[], target: number): boolean {
  let leftIdx = 0,
    rightIdx = array.length - 1;
  while (leftIdx <= rightIdx) {
    const midIdx = Math.floor((rightIdx + leftIdx) / 2);
    const midNumber = array[midIdx];
    console.log(midNumber);
    if (target > midNumber) {
      leftIdx = midIdx + 1;
    } else if (target < midNumber) {
      rightIdx = midIdx - 1;
    }
    if (target === midNumber) return true;
  }
  return false;
}

function binarySearchRecursively(array: number[], target: number): boolean {
  function recurse(leftIdx: number, rightIdx: number): boolean {
    if (leftIdx <= rightIdx) {
      const midIdx = Math.floor((rightIdx + leftIdx) / 2);
      const mid = array[midIdx];
      if (target > mid) return recurse(midIdx + 1, rightIdx);
      else if (target < mid) return recurse(leftIdx, midIdx - 1);
      else return true;
    }
    return false;
  }
  return recurse(0, array.length - 1);
}

describe("Logarithmic runtime", () => {
  describe("iteratively", () => {
    describe("If the number is present", () => {
      it("should find the number if is the first one", () => {
        expect(binarySearchIteratively(numbers, 0)).toBeTruthy();
      });
      it("should find the number if is the last one", () => {
        expect(binarySearchIteratively(numbers, 10)).toBeTruthy();
      });
      it("should find the number if is the middle", () => {
        expect(binarySearchIteratively(numbers, 5)).toBeTruthy();
      });
      it("should find the number if is on the right side", () => {
        expect(binarySearchIteratively(numbers, 8)).toBeTruthy();
      });
    });
    describe("If the number is not present should return false", () => {
      it("should fail if the number is not present in the middle", () => {
        expect(binarySearchIteratively(numbers, 9)).toBeFalsy();
      });
      it("should fail if the number is not present because is under the range", () => {
        expect(binarySearchIteratively(numbers, -2)).toBeFalsy();
      });
      it("should fail if the number is not present because is over the range", () => {
        expect(binarySearchIteratively(numbers, 11)).toBeFalsy();
      });
    });
  });
  describe("recursively", () => {
    describe("If the number is present", () => {
      it("should find the number if is the first one", () => {
        expect(binarySearchRecursively(numbers, 0)).toBeTruthy();
      });
      it("should find the number if is the last one", () => {
        expect(binarySearchRecursively(numbers, 10)).toBeTruthy();
      });
      it("should find the number if is the middle", () => {
        expect(binarySearchRecursively(numbers, 5)).toBeTruthy();
      });
      it("should find the number if is on the right side", () => {
        expect(binarySearchRecursively(numbers, 8)).toBeTruthy();
      });
    });
    describe("If the number is not present should return false", () => {
      it("should fail if the number is not present in the middle", () => {
        expect(binarySearchRecursively(numbers, 9)).toBeFalsy();
      });
      it("should fail if the number is not present because is under the range", () => {
        expect(binarySearchRecursively(numbers, -2)).toBeFalsy();
      });
      it("should fail if the number is not present because is over the range", () => {
        expect(binarySearchRecursively(numbers, 11)).toBeFalsy();
      });
    });
  });
});

/**
 * Quadratic time O(N ^ 2)
 * This is a pretty bad time, some examples of this are bubble sort, insertion sort, selection sort.
 */

function quadraticTime(array: number[]) {
  array.forEach((n) => {
    array.forEach((m) => {
      console.log(n * m);
    });
  });
}

const matrix: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

/**
 * Bubble sort works by swapping the values if they are out of order, until there are no swaps to be done
 * it works in O(N ^ 2) run time and O(1) space.
 */
function bubbleSort(array: number[]) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i],
        next = array[i + 1];
      if (next < current) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
  }
}

function swap(array: number[], i: number, j: number) {
  // const cached = array[j];
  // array[j] = array[i];
  // array[i] = cached;
  [array[i], array[j]] = [array[j], array[i]];
}

describe("sorting in quadratic time", () => {
  let unsortedArray: number[];
  const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  beforeEach(() => {
    unsortedArray = [8, 6, 3, 4, 2, 9, 1, 5, 7];
  });
  test("bubble sort", () => {
    bubbleSort(unsortedArray);
    expect(unsortedArray).toEqual(sorted);
  });
});

/*
Linearithmic runtime O(N log N).
This is more efficient than a quadratic runtime O(N ^ 2), and a good example of this is merge sort and quick sort.
*/

/*
Merge sort works by splitting the arrays first and then merging two arrays together in a sorted fashion
O(N log N) runtime, O(N) space.
 */

function mergeSort(initial: number[]): number[] {
  function helper(array: number[]): number[] {
    if (array.length <= 1) return array;
    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);
    const left = helper(leftArray);
    const right = helper(rightArray);
    const result = mergeSortedArrays(left, right);
    return result;
  }
  // todo: re write merge sort
  return helper(initial);
}

function mergeSortedArrays(a1: number[], a2: number[]): number[] {
  let p1 = 0,
    p2 = 0;
  const result = [];
  while (p1 < a1.length || p2 < a2.length) {
    const a1Value = a1[p1];
    const a2Value = a2[p2];
    if (p1 === a1.length) {
      result.push(a2Value);
      p2++;
    } else if (p2 === a2.length) {
      result.push(a1Value);
      p1++;
    } else {
      if (a1Value <= a2Value) {
        result.push(a1Value);
        p1++;
      } else {
        result.push(a2Value);
        p2++;
      }
    }
  }
  return result;
}

describe("Sorting in Linearithmic time O(N log N)", () => {
  let unsortedArray: number[];
  const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  beforeEach(() => {
    unsortedArray = [8, 6, 3, 4, 2, 9, 1, 5, 7];
  });

  test("merge sorted arrays", () => {
    const result = mergeSortedArrays([1, 3, 5], [2, 4, 6]);
    console.log(result);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("Merge sort", () => {
    const result = mergeSort(unsortedArray);
    expect(result).toEqual(sorted);
  });
});

/*
Exponential runtime: O(2 ^ N)
When this happens the runtime increases exponentially in relation to the size of the input.
Fibonacci is a good example of this.
*/

// runtime: O(2 ^ N) N being the amount of branches in the recursive tree, space: O(N)
function fibonacci(n: number): number {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function memoizedFibonacci(n: number): number {
  const cache = new Map<number, number>([
    [1, 1],
    [0, 1],
  ]);
  function helper(number: number): number {
    if (cache.has(number)) return cache.get(number)!;
    const value = helper(number - 1) + helper(number - 2);
    cache.set(number, value);
    return value;
  }
  return helper(n);
}

describe("Exponential runtime", () => {
  describe("Fibonacci", () => {
    test("3rd number", () => {
      expect(fibonacci(3)).toEqual(3);
    });
    test("4th number", () => {
      expect(fibonacci(4)).toEqual(5);
    });
    test("5th number", () => {
      expect(fibonacci(5)).toEqual(8);
    });
  });
  describe("Memoized Fibonacci", () => {
    test("3rd number", () => {
      expect(memoizedFibonacci(3)).toEqual(3);
    });
    test("4th number", () => {
      expect(memoizedFibonacci(4)).toEqual(5);
    });
    test("6th number", () => {
      expect(memoizedFibonacci(6)).toEqual(13);
    });
    test("7th number", () => {
      expect(memoizedFibonacci(7)).toEqual(21);
    });
  });
});

/*
Now, there is a trick that we can apply to recursive functions which could seriously optimize the runtime, which is memoization
*/
