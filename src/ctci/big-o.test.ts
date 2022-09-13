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
