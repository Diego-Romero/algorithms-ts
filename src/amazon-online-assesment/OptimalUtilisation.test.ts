type NumberPair = [number, number];
// O(N * M) brute force solution
// O(N log N + M log M) optimization?
function optimalUtilization(
  a: [number, number][],
  b: [number, number][],
  target: number
): NumberPair[] {
  let result: NumberPair[] = [];
  let closest = Number.MAX_SAFE_INTEGER;

  for (let pairA of a) {
    for (let pairB of b) {
      const sum = pairA[1] + pairB[1];
      if (sum <= target) {
        const diff = target - sum;
        if (diff < closest) {
          result = [[pairA[0], pairB[0]]];
          closest = diff;
        } else if (diff === closest) {
          result.push([pairA[0], pairB[0]]);
        }
        // console.log(pairA, pairB, sum, target - sum, result);
      }
    }
  }
  // console.log(result);

  return result;
}

describe("optimal Utilization", () => {
  test("should work with a simple base case", () => {
    const a: NumberPair[] = [
      [1, 2],
      [2, 4],
      [3, 6],
    ];
    const b: NumberPair[] = [[1, 2]];
    expect(optimalUtilization(a, b, 7)).toEqual([[2, 1]]);
  });
  test("shold work with a many numbers in b", () => {
    const a: NumberPair[] = [
      [1, 3],
      [2, 5],
      [3, 7],
      [4, 10],
    ];
    const b: NumberPair[] = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    expect(optimalUtilization(a, b, 10)).toEqual([
      [2, 4],
      [3, 2],
    ]);
  });
  test("should work with equal numbers on both", () => {
    const a: NumberPair[] = [
      [1, 8],
      [2, 7],
      [3, 14],
    ];
    const b: NumberPair[] = [
      [1, 5],
      [2, 10],
      [3, 14],
    ];
    expect(optimalUtilization(a, b, 20)).toEqual([[3, 1]]);
  });
  test("should work with equal numbers on both and a target 20", () => {
    const a: NumberPair[] = [
      [1, 8],
      [2, 15],
      [3, 9],
    ];
    const b: NumberPair[] = [
      [1, 8],
      [2, 11],
      [3, 12],
    ];
    expect(optimalUtilization(a, b, 20)).toEqual([
      [1, 3],
      [3, 2],
    ]);
  });
});
