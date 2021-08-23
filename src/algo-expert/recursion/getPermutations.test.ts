// // iterative solution in O(n!)
// export function getPermutations(array: number[]) {
//   if (!array.length) return [];
//   const permutations: number[][] = [[]];
//   for (let n of array) {
//     // need to iterate through all the elements of the permutations, inserting at every position
//     const size = permutations.length;
//     for (let i = 0; i < size; i++) {
//       const current = permutations.shift()!;
//       for (let j = 0; j <= current.length; j++) {
//         const copy = [...current];
//         copy.splice(j, 0, n);
//         permutations.push(copy);
//       }
//     }
//     console.log(n, permutations);
//   }

//   return permutations;
// }

export function getPermutations(
  array: number[],
  index: number = 0,
  permutations: number[][] = [[]]
): number[][] {
  console.log(array[index], permutations);
  if (index === array.length) {
    return permutations;
  }
  // need to insert the current in every position of the permutations
  const n = array[index];
  const newPermutations: number[][] = [];
  for (let permutation of permutations) {
    for (let i = 0; i <= permutation.length; i++) {
      const copy = [...permutation];
      copy.splice(i, 0, n);
      newPermutations.push(copy);
    }
  }
  return getPermutations(array, index + 1, newPermutations);
}

describe("get permutations", () => {
  test("should work", () => {
    const array = [1, 2, 3];
    console.log(getPermutations(array));
  });
});
