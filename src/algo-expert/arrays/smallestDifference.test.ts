// export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
//   let result = [arrayOne[0], arrayTwo[0]];
//   let diff = Number.MAX_SAFE_INTEGER;
//   for (let one of arrayOne) {
//     for (let two of arrayTwo) {
//       const currentDiff = calculateDiff(one, two);
//       if (currentDiff < diff) {
//         result = [one, two];
//         diff = currentDiff;
//       }
//     }
//   }
//   return result;
// }

// function calculateDiff(x: number, y: number): number {
//   // there are 2 different computations, if one number is positive and other negative
//   const absX = Math.abs(x);
//   const absY = Math.abs(y);
//   if ((x > 0 && y < 0) || (y > 0 && x < 0)) {
//     // we sum them
//     return absX + absY;
//   }
//   // else is ok
//   return absX > absY ? absX - absY : absY - absX;
// }

/**
- non empty arrays
- not sorted
- can have negative numbers
*/

// optimal solution in N log n M log M, O(1) space
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  const sortedOne = arrayOne.sort((a, b) => a - b);
  const sortedTwo = arrayTwo.sort((a, b) => a - b);
  let oneIndex = 0,
    twoIndex = 0;
  let result: number[] = [];
  let diff = Number.MAX_SAFE_INTEGER;

  while (oneIndex < arrayOne.length - 1 || twoIndex < arrayTwo.length - 1) {
    const one = sortedOne[oneIndex];
    const two = sortedTwo[twoIndex];
    // console.log(one, two)
    // updates the diff and result if is smaller
    const currentDiff = calculateDiff(one, two);
    if (currentDiff < diff) {
      diff = currentDiff;
      result = [one, two];
    }

    // move the right pointer
    if (oneIndex === arrayOne.length - 1) twoIndex++;
    else if (twoIndex === arrayTwo.length - 1) oneIndex++;
    else {
      one < two ? oneIndex++ : twoIndex++;
    }
  }

  return result;
}

function calculateDiff(x: number, y: number): number {
  // there are 2 different computations, if one number is positive and other negative
  const absX = Math.abs(x);
  const absY = Math.abs(y);
  if ((x > 0 && y < 0) || (y > 0 && x < 0)) {
    // we sum them
    return absX + absY;
  }
  // else is ok
  return absX > absY ? absX - absY : absY - absX;
}