/**
 * Write a function that takes two non empty arrays of integers and finds the pair of numbers from each array whose absolute difference is closest to zero.
 */

// // Solution in N ^ M
// export function smallestDifference(arrayOne: number[], arrayTwo: number[]): number[] {
//   const arrayOneFirst = arrayOne[0], arrayTwoFirst = arrayTwo[0]
//   let closest: [number, number[]] = [getAbsoluteDifference(arrayOneFirst, arrayTwoFirst), [arrayOneFirst, arrayTwoFirst]]
//   for (let i = 0; i < arrayOne.length; i++) {
//     const arrayOneN = arrayOne[i]
//     for (let j = 0; j < arrayTwo.length; j++) {
//       const arrayTwoN = arrayTwo[j];
//       const absoluteDifference = getAbsoluteDifference(arrayOneN, arrayTwoN)
//       if (absoluteDifference === 0) return [arrayOneN, arrayTwoN]
//       if (absoluteDifference < closest[0]) closest = [absoluteDifference, [arrayOneN, arrayTwoN]]
//     }
//   }

//   return closest[1]
// }

// function getAbsoluteDifference(x: number, y: number): number {
//   return Math.abs(Math.abs(x) - Math.abs(y))
// }

// Solution in N log N, M log M
export function smallestDifference(
  arrayOne: number[],
  arrayTwo: number[]
): number[] {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let closest: number[] = [];
  let diff = Infinity;
  let first = 0, second = 0;

  while (first < arrayOne.length && second < arrayTwo.length) {
    const n1 = arrayOne[first], n2 = arrayTwo[second]
    console.log(`comparing ${n1}, ${n2}`)
    let currentDif;
    if (n1 < n2) {
      currentDif = n2 - n1;
      first++;
    } else if (n2 < n1) {
      currentDif = n1 - n2;
      second++;
    } else {
      return [n1, n2]
    }
    if (currentDif < diff) { 
      diff = currentDif;
      closest = [n1, n2]
    }
  }

  return closest;
}


describe("smallest difference to zero", () => {
  test("should return the pair closest to zero", () => {
    expect(
      smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
    ).toEqual([28, 26]);
  });
  test("shoud return the smallest when the pair is zero", () => {
    const first = [240, 124, 86, 111, 2, 84, 954, 27, 89];
    const second = [1, 3, 954, 19, 8];
    expect(
      smallestDifference(first, second)
    ).toEqual([954, 954]);
  });
});
